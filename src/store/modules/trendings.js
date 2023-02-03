import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    trendings: []
  },
  getters: {
    getRepoById: (state) => (id) => state.trendings.find((item) => item.id === id)
  },
  mutations: {
    SET_TRENDINGS (state, payload) {
      state.trendings = payload.map(item => {
        item.following = {
          status: false,
          isLoading: false,
          error: ''
        }
        return item
      })
    },
    SET_README: (state, payload) => {
      state.trendings = state.trendings.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.trendings = state.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.trendings
          }
        }
        return repo
      })
    }
  },
  actions: {
    async getTrendings ({ commit, rootState }) {
      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', data.items)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        trendings: {
          status: false,
          isLoading: true,
          error: ''
        }
      })
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          trendings: {
            status: true,
            isLoading: true
          }
        })
      } catch (error) {
        console.log(error)
        commit('SET_FOLLOWING', {
          id,
          trendings: {
            status: false,
            error: 'error'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          trendings: {
            isLoading: false
          }
        })
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_FOLLOWING', {
        id,
        trendings: {
          status: false,
          isLoading: true,
          error: ''
        }
      })
      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          trendings: {
            status: false,
            isLoading: true
          }
        })
      } catch (error) {
        console.log(error)
        commit('SET_FOLLOWING', {
          id,
          trendings: {
            status: false,
            error: 'error'
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          trendings: {
            isLoading: false
          }
        })
      }
    }
  }
}

import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    starred: [],
    isLoading: false
  },
  getters: {
    getStarredById: (state) => (id) => state.starred.find((item) => item.id === id)
  },
  mutations: {
    SET_STARRED (state, payload) {
      state.starred = payload
    },
    SET_LOADING (state, payload) {
      state.isLoading = payload
    },
    DELETE_STAR (state, payload) {
      const ndxToDelete = state.starred.indexOf(payload)
      state.starred.splice(ndxToDelete, 1)
    },
    SET_ISSUE (state, payload) {
      state.starred = state.starred.map(item => {
        if (payload.id === item.id) {
          item.issues = payload.issues
        }
        return item
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.starred = state.starred.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...payload.starred
          }
        }
        return repo
      })
    }
  },
  actions: {
    async getStarredRepos ({ commit }) {
      try {
        const { data } = await api.starred.getStarredRepos()
        commit('SET_STARRED', data)
      } catch (e) {
        console.log(e)
      }
    },
    async getIssues ({ commit }, { id, owner, repo }) {
      try {
        commit('SET_LOADING', true)
        const { data } = await api.issues.getIssues({ owner, repo })
        commit('SET_ISSUE', { id, issues: data })
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async unFollow ({ commit, getters }, id) {
      const repo = getters.getStarredById(id)
      try {
        await api.starred.unStarRepo({ owner: repo.owner.login, repo: repo.name })
        commit('DELETE_STAR', repo)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

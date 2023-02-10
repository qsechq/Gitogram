import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    userData: [],
    repos: []
  },
  getters: {
  },
  mutations: {
    SET_USERDATA (state, payload) {
      state.userData = payload
    },
    SET_REPOS (state, payload) {
      state.repos = payload
    }
  },
  actions: {
    async getUserData ({ commit }) {
      try {
        const { data } = await api.user.getUserData()
        commit('SET_USERDATA', data)
      } catch (e) {
        console.log(e)
      }
    },
    async getUserRepos ({ commit }) {
      try {
        const { data } = await api.user.getUserRepos()
        commit('SET_REPOS', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

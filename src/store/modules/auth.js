import * as api from '../../api'

export default {
  namespaced: true,
  actions: {
    async getToken () {
      try {
        const { data } = await api.auth.getToken()
        const token = data.token
        localStorage.setItem('token', token)
        return data.token
      } catch (e) {
        console.log(e)
      }
    }
  }
}


import { createStore } from 'vuex'
import trendings from './modules/trendings'
import userData from './modules/user'
import auth from './modules/auth'
import starred from './modules/starred'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trendings.trendings.filter((trendingsRepo) =>
        !state.starred.starred.some((starredRepo) => trendingsRepo.id === starredRepo.id)
      )
    }
  },
  modules: {
    trendings,
    userData,
    auth,
    starred
  }
})

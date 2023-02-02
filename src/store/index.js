
import { createStore } from 'vuex'
import trendings from './modules/trendings'
import userData from './modules/user'
import auth from './modules/auth'

export default createStore({
  modules: {
    trendings,
    userData,
    auth
  }
})

import { StoriesPage } from '../pages/StoriesPage'
import { FeedsPage } from '../pages/FeedsPage'
import { AuthPage } from '../pages/AuthPage'

export default [
  {
    path: '/',
    component: FeedsPage,
    name: 'feeds'
  },
  {
    path: '/stories',
    component: StoriesPage,
    name: 'stories'
  },
  {
    path: '/auth',
    component: AuthPage,
    name: 'auth'
  }
]

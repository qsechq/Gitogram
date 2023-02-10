import { StoriesPage } from '../pages/StoriesPage'
import { FeedsPage } from '../pages/FeedsPage'
import { AuthPage } from '../pages/AuthPage'
import { ProfilePage } from '../pages/ProfilePage'
import { WatchersPage } from '../pages/WatchersPage'

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
  },
  {
    path: '/profile',
    component: ProfilePage,
    name: 'profile'
  },
  {
    path: '/watchers',
    component: WatchersPage,
    name: 'watchers'
  }
]

import { StoriesPage } from '../pages/StoriesPage'
import { FeedsPage } from '../pages/FeedsPage'

export default [
  {
    path: '/feeds',
    component: FeedsPage,
    name: 'feeds'
  },
  {
    path: '/stories',
    component: StoriesPage,
    name: 'stories'
  }
]

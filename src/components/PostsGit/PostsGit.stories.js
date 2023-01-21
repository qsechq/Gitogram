import { PostsGit } from './index'
import { UserGit } from '../UserGit'
import { PostItemGit } from '../PostItemGit'
import { TogglerView } from '../TogglerView'
import { CommentItem } from '../CommentItem'

export default {
  title: 'PostsGit',
  component: UserGit,
  TogglerView,
  CommentItem,
  PostsGit,
  PostItemGit
}

const template = (args) => ({
  components: {
    PostsGit, PostItemGit
  },
  setup () {
    return { args }
  },
  template: `
  <PostsGit v-bind="args" >
    <template #post>
        <PostItemGit v-bind="args"/> 
    </template>
  </PostsGit>
  `
})

export const Default = template.bind({})

Default.args = {
  name: 'test',
  avatar: require('../../assets/avatar.png'),
  date: '15 MAY',
  description: 'testtesttesttest',
  star: 15,
  fork: 15
}

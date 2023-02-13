import { PostsGit } from './index'
import { UserGit } from '../UserGit'
import { PostItemGit } from '../PostItemGit'
import { issuesComponent } from '../issuesComponent'

export default {
  title: 'PostsGit',
  component: UserGit,
  issuesComponent,
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

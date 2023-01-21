import { PostItemGit } from './index'

export default {
  title: 'PostItemGit',
  component: PostItemGit
}

const template = (args) => ({
  components: {
    PostItemGit
  },
  setup () {
    return { args }
  },
  template: `
  <PostItemGit v-bind="args" ></PostItemGit>
  `
})

export const Default = template.bind({})

Default.args = {
  name: 'test',
  date: '15 MAY',
  description: 'testtesttesttest',
  star: 15,
  fork: 15
}

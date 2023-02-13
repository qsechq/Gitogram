import { issuesComponent } from './index'
import { TogglerView } from '../TogglerView'
import { CommentItem } from '../CommentItem'

export default {
  title: 'issuesComponent',
  component: issuesComponent,
  TogglerView,
  CommentItem
}

const template = (args) => ({
  components: {
    issuesComponent
  },
  setup () {
    return { args }
  },
  template: `
  <issuesComponent v-bind="args" >
  </issuesComponent>
  `
})

export const Default = template.bind({})

Default.args = {
  body: 'tetst',
  user: 'test'
}

import { CommentItem } from './index'

export default {
  title: 'CommentItem',
  component: CommentItem
}

const template = (args) => ({
  components: {
    CommentItem
  },
  setup () {
    return { args }
  },
  template: `
  <CommentItem v-bind="args" ></CommentItem>
  `
})

export const Default = template.bind({})

Default.args = {

}

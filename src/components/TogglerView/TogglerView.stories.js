import { TogglerView } from './index'
import { MyIcon } from '../../icons'

export default {
  title: 'TogglerView',
  components: TogglerView,
  MyIcon,
  argTypes: {
    onToggle: {
      action: 'onToggle'
    }
  }
}

const template = (args) => ({
  components: {
    TogglerView, MyIcon
  },
  setup () {
    return { args }
  },
  template: `
  <TogglerView @onToggle="args.onToggle" v-bind="args" ></TogglerView>
  `
})

export const Default = template.bind({})

Default.args = {

}

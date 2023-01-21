import { HeaderTop } from './index'
import { MyIcon } from '../../icons'

export default {
  title: 'HeaderTop',
  component: HeaderTop,
  MyIcon
}

const template = (args) => ({
  components: {
    HeaderTop
  },
  setup () {
    return { args }
  },
  template: `
  <HeaderTop v-bind="args" ></HeaderTop>
  `
})

export const Default = template.bind({})

Default.args = {

}

import { SpinnerComponent } from './index'

export default {
  title: 'SpinnerComponent',
  components: SpinnerComponent
}

const template = (args) => ({
  components: {
    SpinnerComponent
  },
  setup () {
    return { args }
  },
  template: `
  <SpinnerComponent v-bind="args"></SpinnerComponent>
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: require('../../assets/avatar.png'),
  name: 'test'
}

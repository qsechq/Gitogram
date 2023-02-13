import { SubscribeComponent } from './index'

export default {
  title: 'SubscribeComponent',
  component: SubscribeComponent
}

const template = (args) => ({
  components: {
    SubscribeComponent
  },
  setup () {
    return { args }
  },
  template: `
  <SubscribeComponent v-bind="args" ></SubscribeComponent>
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: require('../../assets/avatar.png'),
  name: 'test',
  type: 'user'
}

import { HeaderUsersItem } from './index'

export default {
  title: 'HeaderUsersItem',
  component: HeaderUsersItem,
  argTypes: {
    onPress: {
      action: 'onPress'
    }
  }
}

const template = (args) => ({
  components: {
    HeaderUsersItem
  },
  setup () {
    return { args }
  },
  template: `
  <HeaderUsersItem @onPress="args.onPress" v-bind="args" ></HeaderUsersItem>
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: require('../../assets/avatar.png'),
  name: 'test'
}

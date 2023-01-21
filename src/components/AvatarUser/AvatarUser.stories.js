import { AvatarUser } from './index'

export default {
  title: 'AvatarUser',
  component: AvatarUser
}

const template = (args) => ({
  components: {
    AvatarUser
  },
  setup () {
    return { args }
  },
  template: `
  <AvatarUser v-bind="args" ></AvatarUser>
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: require('../../assets/avatar.png')
}

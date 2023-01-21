import { UserGit } from './index'

export default {
  title: 'UserGit',
  component: UserGit
}

const template = (args) => ({
  components: {
    UserGit
  },
  setup () {
    return { args }
  },
  template: `
  <UserGit v-bind="args" ></UserGit>
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: require('../../assets/avatar.png'),
  name: 'test'
}

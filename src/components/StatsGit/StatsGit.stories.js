import { StatsGit } from './index'
import { MyIcon } from '../../icons'

export default {
  title: 'StatsGit',
  component: StatsGit,
  MyIcon
}

const template = (args) => ({
  components: {
    StatsGit
  },
  setup () {
    return { args }
  },
  template: `
  <StatsGit v-bind="args" ></StatsGit>
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: require('../../assets/avatar.png'),
  name: 'test',
  star: 124,
  fork: 55
}

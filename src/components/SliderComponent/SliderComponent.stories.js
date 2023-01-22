import { SliderComponent } from './index'
import { ProgressComponent } from '../ProgressComponent'
import { ButtonComponent } from '../ButtonComponent'
import { UserGit } from '../UserGit'

export default {
  title: 'SliderComponent',
  components: SliderComponent,
  ProgressComponent,
  ButtonComponent,
  UserGit,
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [
        { name: 'grey', value: '#333333 ' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
}

const template = (args) => ({
  components: {
    SliderComponent, ProgressComponent, ButtonComponent, UserGit
  },
  setup () {
    return { args }
  },
  template: `
  <SliderComponent v-bind="args"></SliderComponent>
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: require('../../assets/avatar.png'),
  name: 'test'
}

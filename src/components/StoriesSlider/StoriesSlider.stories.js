import { StoriesSlider } from './index'
import { SliderComponent } from '../SliderComponent'

export default {
  title: 'StoriesSlider',
  components: StoriesSlider,
  SliderComponent,
  parameters: {
    backgrounds: {
      default: 'grey',
      values: [
        { name: 'grey', value: '#333333 ' },
        { name: 'facebook', value: '#3b5998' }
      ]
    }
  }
}

const template = (args) => ({
  components: {
    StoriesSlider, StoriesSlider
  },
  setup () {
    return { args }
  },
  template: `
  <StoriesSlider v-bind="args"></StoriesSlider>
  `
})

export const Default = template.bind({})

Default.args = {
  avatar: require('../../assets/avatar.png'),
  name: 'test'
}

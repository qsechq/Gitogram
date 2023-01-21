import { ButtonComponent } from './index'

export default {
  title: 'ButtonComponent',
  components: ButtonComponent
}

const template = (args) => ({
  components: {
    ButtonComponent
  },
  setup () {
    return { args }
  },
  template: `
  <ButtonComponent  v-bind="args" >Folowing</ButtonComponent>
  `
})

export const Default = template.bind({})

Default.args = {
  hoverText: 'Unfollow'
}

import { PlaceholderComponent } from './index'

export default {
  title: 'PlaceholderComponent',
  components: PlaceholderComponent,
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
    PlaceholderComponent
  },
  setup () {
    return { args }
  },
  template:
        `
  <div style="max-width: 300px">
    <PlaceholderComponent v-bind="args"></PlaceholderComponent>
  </div>
  `
})

export const Default = template.bind({})

Default.args = {
  paragraphs: 2
}

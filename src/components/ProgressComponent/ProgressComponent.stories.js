import { ProgressComponent } from './index'

export default {
  title: 'ProgressComponent',
  components: ProgressComponent,
  argTypes: {
    onFinish: {
      action: 'onFinish'
    }
  }
}

const template = (args) => ({
  components: {
    ProgressComponent
  },
  setup () {
    return { args }
  },
  template: `
  <ProgressComponent @onFinish="args.onFinish" >Folowing</ProgressComponent>
  `
})

export const Default = template.bind({})

Default.args = {

}

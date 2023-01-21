import { HeaderComponent } from './index'
import { HeaderTop } from '../HeaderTop'
import { HeaderUsersItem } from '../HeaderUsersItem'

export default {
  title: 'HeaderComponent',
  component: HeaderTop,
  HeaderComponent,
  HeaderUsersItem

}

const template = (args) => ({
  components: {
    HeaderComponent, HeaderTop, HeaderUsersItem
  },
  setup () {
    return { args }
  },
  template: `
  <HeaderComponent v-bind="args">
    <template #header-top>
        <HeaderTop />
    </template>
    <template #content>
        <ul class="header__users-list">
            <li class="header__users-item" v-for="n in 5" :key="n">
              <HeaderUsersItem
              v-bind="args"
              />
            </li>
    </template>
  </HeaderComponent>
  `
})

export const Default = template.bind({})

Default.args = {
  name: 'test',
  avatar: require('../../assets/avatar-list.png')
}

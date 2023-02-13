<template>
  <div class="user__git-wr">
    <user-git :name="name" :avatar="avatar">
      <template #type>
        <div class="user__git-type">{{ type }}</div>
      </template>
    </user-git>
    <div class="profile__item-btn">
    <button-component :theme="'grey'" @click="$emit('onUnFollow', id)">
      <span>Unfollow</span>
    </button-component>
  </div>
  </div>
</template>

<script>
import { UserGit } from '../../components/UserGit'
import { ButtonComponent } from '../../components/ButtonComponent'

export default {
  name: 'SubscribeComponent',
  components: {
    UserGit, ButtonComponent
  },
  props: {
    avatar: String,
    name: String,
    type: String,
    id: Number
  }
}
</script>

<style src="./user-git.scss" lang="scss" scoped>

</style>

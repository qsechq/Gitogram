<template>

  <div class="header__users-link" @click.prevent="$emit('onPress')">
    <div class="header__users--border">
      <div class="header__users-wrap">
        <avatar-user :avatar="avatar" />
      </div>
    </div>
    <span class="header__users-name">{{ name }}</span>
  </div>

</template>

<script>
import { AvatarUser } from '../AvatarUser'

export default {
  name: 'HeaderUserItem',
  emits: ['onPress'],
  components: {
    AvatarUser
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./header-user-item.scss" scoped lang="scss">

</style>

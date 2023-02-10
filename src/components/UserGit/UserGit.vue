<template>
  <div class="user__git-wrap">
    <div class="avatar__wrap">
      <avatar-user :avatar="avatar" alt="avatar" class="post__item-avatar" />
    </div>
    <div class="user__git-info">
      <span class="post__item-name">{{ name }}</span>
      <slot name="info"></slot>
      <slot name="type"></slot>
    </div>
  </div>
</template>

<script>
import { AvatarUser } from '../AvatarUser'

export default {
  name: 'UserGit',
  components: {
    AvatarUser
  },
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./user-git.scss" lang="scss" scoped>

</style>

<template>
  <div class="user__git-wrap">
    <div class="avatar__wrap">
      <avatar-user :avatar="avatar" alt="avatar" class="post__item-avatar" />
    </div>
    <span class="post__item-name">{{ name }}</span>
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

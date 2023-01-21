<template>
   <img :src="avatar" alt="avatar" class="header__users-avatar">
</template>

<script>
export default {
  name: 'AvatarUser',
  props: {
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./avatar-user.scss" lang="scss" scoped>

</style>

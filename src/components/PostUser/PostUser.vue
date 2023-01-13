<template>
    <img :src="avatar" alt="avatar" class="post__item-avatar">
    <span class="post__item-name">{{ name }}</span>
</template>

<script>

export default {
  name: 'PostUser',
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

<style src="./post-user.scss" lang="scss" scoped>

</style>

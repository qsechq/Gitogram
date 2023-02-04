<template>
    <p><span class="post__comments-nick">{{ user }}</span>{{ body }}</p>
</template>

<script>

export default {
  name: 'CommentItem',
  props: {
    user: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }

}
</script>

<style src="./comment-item.scss" lang="scss" scoped>

</style>

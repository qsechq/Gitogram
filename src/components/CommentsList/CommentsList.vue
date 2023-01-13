<template>
  <ul class="post__comments-list">
    <li class="post__comments-item" v-for="n in 2" :key="n">
      <p><span class="post__comments-nick">joshua_l</span>Enable performance measuring in production, at the user's request</p>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'CommentsList',
  props: {

  }

}
</script>

<style src="./comments.scss" lang="scss" scoped>

</style>

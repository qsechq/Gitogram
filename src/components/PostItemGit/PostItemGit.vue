<template>
    <div class="x-post-content">
        <div class="post__content-text">
            <h2 class="post__item-title">{{ name }}</h2>
            <p class="post__item-subtitle">{{ description }}</p>
        </div>
        <div class="post__content-info">
            <stats-git :star="star" :fork="fork" />
        </div>
    </div>
</template>

<script>
import { StatsGit } from '../StatsGit'

export default {
  name: 'PostItemGit',
  components: {
    StatsGit
  },
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    star: {
      type: Number,
      required: true
    },
    fork: {
      type: Number,
      required: true
    }
  }
}
</script>

<style src="./post-item-git.scss" lang="scss" scoped>

</style>

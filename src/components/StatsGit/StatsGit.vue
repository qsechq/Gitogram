<template>
    <div class="x-post__content-info">
        <div class="post__info post__info-star">
            <button class="post__info-btn">
                <div class="post__info-icon">
                    <my-icon name="StarSvg" />
                </div>
                Star
            </button>
            <div class="post__info-counter">
                {{ star }}
            </div>
        </div>
        <div class="post__info post__info-fork">
            <button class="post__info-btn">
                <div class="post__info-icon">
                    <my-icon name="ForkSvg" />
                </div>
                Fork
            </button>
            <div class="post__info-counter">
                {{ fork }}
            </div>
        </div>
    </div>
</template>

<script>
import { MyIcon } from '@/icons'

export default {
  name: 'StatsGit',
  props: {
    star: {
      type: String,
      required: true
    },
    fork: {
      type: String,
      required: true
    }
  },
  components: {
    MyIcon
  }
}
</script>

<style src="./stats-git.scss" lang="scss" scoped>

</style>

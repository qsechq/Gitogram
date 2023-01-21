<template>
  <button :class="['post__item-btn', {'active':isActive}]" @click="toggle">
    <span class="post__btn-toggle">{{ isActive ? 'Hide':'View' }} issues</span>
    <my-icon class="post__btn-arrow" name="ArrowSvg" />
  </button>
</template>

<script>
import { MyIcon } from '../../icons'

export default {
  name: 'TogglerView',
  components: {
    MyIcon
  },
  emits: ['onToggle'],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
      this.$emit('onToggle', this.isActive)
    }
  }
}
</script>

<style src="./toggler-view.scss" lang="scss" scoped>

</style>

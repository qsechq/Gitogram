<template>
    <div :class="{active: isActive && startProgress}" class="c-progress">
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
  name: 'ProgressComponent',
  emits: ['onFinish'],
  props: {
    isActive: Boolean,
    startProgress: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    emitOnfinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
      }, 0)
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnfinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnfinish)
  }
}
</script>

<style src="./progress-component.scss" lang="scss" scoped>

</style>

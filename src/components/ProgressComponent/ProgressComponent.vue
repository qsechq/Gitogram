<template>
    <div :class="{active}" class="c-progress">
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
  name: 'ProgressComponent',
  emits: ['onFinish'],
  data () {
    return {
      active: false
    }
  },
  methods: {
    emitOnfinish () {
      console.log('ese')
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.active = true
      }, 0);
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnfinish)
    console.log('esmu')
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnfinish)
  }
}
</script>

<style src="./progress-component.scss" lang="scss" scoped>

</style>

<template>
    <button :class="['c-button', `theme-green`, {'hover-text': withHoverText}]" :data-hover-text="hoverText">
        <span class="btn__inner">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style src="./button-component.scss" lang="scss" scoped>

</style>

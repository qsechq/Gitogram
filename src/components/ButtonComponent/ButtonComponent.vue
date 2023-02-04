<template>
    <button :class="['c-button', `${theme}`, {'hover-text': withHoverText}]" :data-hover-text="hoverText">
        <div class="btn__inner">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    hoverText: {
      type: String
    },
    theme: {
      type: String,
      default: 'green'
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

<template>
    <button :class="['c-button', `${theme}`, {'hover-text': withHoverText, theme:themeColor}]" :data-hover-text="hoverText">
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
      required: true
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

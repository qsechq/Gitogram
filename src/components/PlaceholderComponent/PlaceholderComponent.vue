<template>
    <div class="placeholder">
        <div class="mainpic"></div>
        <div class="content" v-for="n in paragraphs" :key="n">
            <div class="item"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'PaceholderComponent',
  props: {
    paragraphs: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped src="./placeholder-component.scss">

</style>

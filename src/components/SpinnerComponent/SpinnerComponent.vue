<template>
    <div :class="['spinner', { btn }]">
        <my-icon name="SpinnerSvg" />
    </div>
</template>

<script>
import { MyIcon } from '../../icons'

export default {
  name: 'SpinnerComponent',
  components: { MyIcon },
  props: {
    btn: Boolean
  }
}
</script>

<style lang="scss" src="./spinner-component.scss" scoped>

</style>

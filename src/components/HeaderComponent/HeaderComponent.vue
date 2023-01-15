<template>
    <div class="header">
        <div class="x-container">
            <div class="header__top">
                <slot name="header-top"></slot>
            </div>
            <div class="header__users" v-if="$slots.content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style src="./header-component.scss" lang="scss" scoped>

</style>

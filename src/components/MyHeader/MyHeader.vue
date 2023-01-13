<template>
    <div class="header">
        <div class="x-container">
            <div class="header__main">
                <slot name="header-main"></slot>
            </div>
            <div class="header__users" v-if="$slots.content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style src="./my-header.scss" lang="scss" scoped>

</style>

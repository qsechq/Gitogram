<template>
    <div class="wrapper">
        <header class="header">
            <div class="x-container">
                <div class="header__top-content">
                    <header-top />
                </div>
            </div>
        </header>
        <div class="app-slider">
            <stories-slider :initialSlide="Number($route.params.initialSlide)"/>
        </div>
    </div>
</template>

<script>
import { StoriesSlider } from '../../components/StoriesSlider'
import { HeaderTop } from '../../components/HeaderTop'

export default {
  name: 'StoriesPage',
  components: {
    StoriesSlider, HeaderTop
  }
}
</script>

<style src="./stories-page.scss" lang="scss" scoped>

</style>

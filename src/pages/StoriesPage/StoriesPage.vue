<template>
    <div class="wrapper">
        <header class="header">
            <div class="x-container">
                <div class="header__content">
                    <router-link class="header__content-link" :to="{ name: 'feeds' }">
                        <my-icon class="header__content-stories" name="LogoSvg" />
                    </router-link>
                    <router-link class="header__content-link" :to="{ name: 'feeds' }">
                        <my-icon class="header__content-close" name="CloseSvg" />
                    </router-link>
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
import { MyIcon } from '../../icons'

export default {
  name: 'StoriesPage',
  components: {
    StoriesSlider, MyIcon
  }
}
</script>

<style src="./stories-page.scss" lang="scss" scoped>

</style>

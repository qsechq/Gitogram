<template>
    <div class="x-header-top">
        <a href="/" class="header__top-logo">
            <img src="../../assets/Gitogram.svg" alt="logo" class="header__top-img">
        </a>
        <div class="header__top-wrap">
            <ul class="header__top-list">
                <li class="header__top-item">
                    <a href="#" class="header__top-link">
                        <div class="header__top-icon">
                            <my-icon name="HomeSvg" />
                        </div>
                    </a>
                </li>
                <li class="header__top-item">
                    <a href="#" class="header__top-link">
                        <img src="../../assets/avatar.png" alt="home" class="header__top-avatar">
                    </a>
                </li>
                <li class="header__top-item">
                    <a href="#" class="header__top-link">
                        <div class="header__top-icon">
                            <my-icon name="LogoutSvg" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { MyIcon } from '../../icons'

export default {
  name: 'HeaderTop',
  components: {
    MyIcon
  }
}
</script>

<style src="./header-top.scss" lang="scss" scoped>

</style>

<template>
    <div class="auth">
        <div class="auth__right">
            <div class="auth__right-wrap">
                <div class="auth__right-logo">
                    <my-icon name="LogoSvg" />
                </div>
                <div class="auth__right-desc">
                    More than just one repository.
                    This is our digital world.
                </div>
                <div class="auth__right-btn">
                    <button-component data-hover-text="Authorize with github" class="btn__auth">
                        <span>Authorize with github</span>
                        <div class="auth__btn-logo">
                            <my-icon name="GhLogoSvg" />
                        </div>
                    </button-component>
                </div>
            </div>
        </div>
        <div class="auth__left">
            <img src="../../assets/device.png" alt="device" class="auth__left-content">
        </div>
    </div>
</template>

<script>
import { MyIcon } from '../../icons'
import { ButtonComponent } from '../../components/ButtonComponent'

export default {
  name: 'AuthPage',
  components: {
    MyIcon, ButtonComponent
  }
}
</script>

<style src="./auth-page.scss" lang="scss" scoped>

</style>

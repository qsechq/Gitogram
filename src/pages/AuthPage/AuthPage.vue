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
                    <button-component @click="getCode" data-hover-text="Authorize with github" class="btn__auth">
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
import env from '../../../env'
import { mapActions } from 'vuex'

export default {
  name: 'AuthPage',
  components: {
    MyIcon, ButtonComponent
  },
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo user')
      window.location.href = `${githubAuthApi}?${params}`
    },
    ...mapActions({
      getToken: 'auth/getToken',
      getUserData: 'userData/getUserData'
    })
  },
  async created () {
    await this.getToken()
    if (localStorage.getItem('token')) {
      this.$router.replace({ name: 'feeds' })
    }
  }
}
</script>

<style src="./auth-page.scss" lang="scss" scoped>

</style>

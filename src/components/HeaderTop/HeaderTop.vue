<template>
    <div class="x-header-top">
        <router-link :to="{ name: 'feeds' }" :class="['header__top-logo', {'header__top-logo--black': blackBackground}]">
            <my-icon name="LogoSvg" />
        </router-link>
        <div class="header__top-wrap" v-if="this.$route.name !== 'stories'">
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
                        <img :src="userAvatar.avatar_url" alt="home" class="header__top-avatar">
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
        <router-link class="header__top-link" :to="{ name: 'feeds' }" v-else>
            <my-icon class="header__top-close" name="CloseSvg" />
        </router-link>
    </div>
</template>

<script>
import { MyIcon } from '../../icons'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HeaderTop',
  components: {
    MyIcon
  },
  data () {
    return {
      blackBackground: false
    }
  },
  methods: {
    colorLogo () {
      this.$route.name === 'stories' ? this.blackBackground = true : this.blackBackground = false
    },
    ...mapActions({
      getUserData: 'userData/getUserData'
    })
  },
  async mounted () {
    this.colorLogo()
    await this.getUserData()
  },
  computed: {
    ...mapState({
      userAvatar: state => state.userData.userData
    })
  }
}
</script>

<style src="./header-top.scss" lang="scss" scoped>

</style>

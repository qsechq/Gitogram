<template>
    <div class="c-stories-slider">
        <div class="stories__container">
            <ul class="stories__list" ref="slider">
                <li class="stories__item" :class="{active: slideNdx === ndx}" v-for="(trending, ndx) in trendings" :key="trending.id" ref="trending">
                    <slider-component :data="getStory(trending)"
                        :isActive="slideNdx === ndx"
                        :startProgress="readyForProgress"
                        :isLoading="slideNdx === ndx && isLoading"
                        :btnsShow="activeBtns"
                        @onFollow="starRepo"
                        @onUnFollow="unStarRepo"
                        @onNextSlide="handleSlide(ndx + 1)"
                        @onPrevSlide="handleSlide(ndx - 1)"
                        @onProgressFinish="handleSlide(ndx + 1)"
                        :initialSlide="$route.params.initialSlide">
                      </slider-component>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { SliderComponent } from '../SliderComponent'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'StoriesSlider',
  components: {
    SliderComponent
  },
  props: {
    initialSlide: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      isLoading: false,
      btnsShow: true,
      readyForProgress: true
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.trendings
    }),
    activeBtns () {
      if (this.btnsShow === false) {
        return []
      }
      if (this.slideNdx === 0) {
        return ['next']
      }
      if (this.slideNdx === this.trendings.length - 1) {
        return ['prev']
      }
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      getTrendings: 'trendings/getTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    async fetchReadmeForActive () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStory (obj) {
      return {
        id: obj.id,
        avatar: obj.owner.avatar_url,
        name: obj.owner.login,
        content: obj.readme,
        following: obj.following
      }
    },
    moveSlider (slideNdx) {
      const { slider } = this.$refs
      const trending = this.$refs.trending[slideNdx]
      const slideWidth = parseInt(getComputedStyle(trending).width, 10)
      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.isLoading = true
      this.btnsShow = false
      this.readyForProgress = false
      try {
        await this.fetchReadmeForActive()
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
        this.btnsShow = true
        this.readyForProgress = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(trending => trending.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
    await this.getTrendings()
    await this.loadReadme()
  }

}
</script>

<style src="./stories-slider.scss" lang="scss" scoped>

</style>

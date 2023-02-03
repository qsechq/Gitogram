<template>
  <div :id="data.id" class="x-slider__item" :class="{ 'active': isActive }">
    <div class="slider__head">
      <div class="slider__head-progress">
        <progress-component :isActive="isActive" :startProgress="startProgress" @onFinish="$emit('onProgressFinish')" />
      </div>
      <div class="slider__head-user">
        <user-git :name="data.name" :avatar="data.avatar" />
      </div>
    </div>
    <div class="slider__content">
      <div class="slider__load" v-if="isLoading">
        <spinner-component  />
      </div>
      <div class="info" v-else>
        <div v-if="data.content?.length" class="slider__content-text" v-html="data.content"></div>
        <placeholder-component v-else :paragraphs="2" />
      </div>
    </div>
    <div class="slider__button">
      <button-component class="button--slider" @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)" :theme="data.following.status ? 'grey' : 'green'">
        <div class="spinner__wrap" v-if="data.following.isLoading">
          <spinner-component  class="spinner__btn"/>
        </div>
        <span v-else>{{ data.following.status ? 'Unfollow': 'Follow' }}</span>
      </button-component>
    </div>
    <template v-if="isActive">
      <button v-if="btnsShow.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
        <span class="icon">
          <my-icon name="ArrowSlideSvg" />
        </span>
      </button>
      <button v-if="btnsShow.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
        <span class="icon">
          <my-icon name="ArrowSlideSvg" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import { ProgressComponent } from '../ProgressComponent'
import { ButtonComponent } from '../ButtonComponent'
import { UserGit } from '../UserGit'
import { PlaceholderComponent } from '../PlaceholderComponent'
import { SpinnerComponent } from '../SpinnerComponent'
import { MyIcon } from '../../icons'

export default {
  name: 'SliderComponent',
  emits: ['onProgressFinish', 'onNextSlide', 'onPrevSlide', 'onFollow', 'onUnFollow'],
  components: {
    ProgressComponent,
    ButtonComponent,
    UserGit,
    PlaceholderComponent,
    SpinnerComponent,
    MyIcon
  },
  props: {
    isActive: Boolean,
    isLoading: Boolean,
    startProgress: Boolean,
    btnsShow: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      },
      initialSlide: {
        type: Number,
        default: 1,
        required: true
      }
    },
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style src="./slider-component.scss" lang="scss" scoped>

</style>

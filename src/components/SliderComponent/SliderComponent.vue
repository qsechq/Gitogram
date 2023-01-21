<template>
    <div class="x-slider__item">
        <div class="slider__head">
            <div class="slider__head-progress">
                <progress-component @onFinish="$emit('onProgressFinish')"/>
            </div>
            <div class="slider__head-user">
                <user-git :name="name" :avatar="avatar" />
            </div>
        </div>
        <div class="slider__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit dignissimos repellat magnam possimus
            fuga, veniam nulla sequi nemo, cumque totam sapiente et. Voluptas, deserunt voluptates iure magni ducimus
            necessitatibus?
        </div>
        <div class="slider__button">
            <button-component >
                Follow
            </button-component>
        </div>
    </div>
</template>

<script>
import { ProgressComponent } from '../ProgressComponent'
import { ButtonComponent } from '../ButtonComponent'
import { UserGit } from '../UserGit'

export default {
  name: 'SliderComponent',
  emits: ['onProgressFinish'],
  components: {
    ProgressComponent, ButtonComponent, UserGit
  },
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./slider-component.scss" lang="scss" scoped>

</style>

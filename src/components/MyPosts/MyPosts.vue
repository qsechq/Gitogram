<template>
  <li class="posts__item">
    <div class="post__item-user">
      <post-user :avatar="avatar" :name="name"/>
    </div>
    <div class="c-post__item-content">
      <slot name="post"></slot>
    </div>
    <div class="post__item-toggler">
      <my-toggler @onToggle="onToggle"/>
    </div>
    <div class="post__comments" v-show="isShow">
      <comments-list></comments-list>
    </div>
    <div class="post__date">
      {{ date }}
    </div>
  </li>
</template>

<script>
/* eslint-disable */
import { PostUser } from '@/components/PostUser'
import { MyToggler } from '@/components/MyToggler'
import { CommentsList } from '@/components/CommentsList'

export default {
  name: 'MyPost',
  components: {
    PostUser, MyToggler, CommentsList
  },
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    onToggle (isActive) {
     this.isShow = isActive
    }
  }
}
</script>

<style src="./my-post.scss" lang="scss" scoped>

</style>

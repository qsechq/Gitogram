<template>
  <li class="posts__item">
    <div class="post__item-user">
      <UserGit :avatar="avatar" :name="name" />
    </div>
    <div class="c-post__item-content">
      <slot name="post"></slot>
    </div>
    <div class="post__item-toggler">
      <toggler-view @onToggle="onToggle" />
    </div>
    <div class="post__comments" v-show="isShow">
      <ul class="post__comments-list">
        <comment-item  v-for="n in 2" :key="n" />
      </ul>
    </div>
    <div class="post__date">
      {{ date }}
    </div>
  </li>
</template>

<script>
/* eslint-disable */
import { UserGit } from '@/components/UserGit'
import { TogglerView } from '@/components/TogglerView'
import { CommentItem } from '@/components/CommentItem'

export default {
  name: 'PostsGit',
  components: {
    UserGit, TogglerView, CommentItem
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
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    onToggle(isActive) {
      this.isShow = isActive
    }
  }
}
</script>

<style src="./posts-git.scss" lang="scss" scoped>

</style>

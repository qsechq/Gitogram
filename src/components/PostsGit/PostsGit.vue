<template>
  <li class="posts__item">
    <div class="post__item-user">
      <UserGit :avatar="avatar" :name="name" />
    </div>
    <div class="c-post__item-content">
      <slot name="post"></slot>
    </div>
    <div class="post__item-toggler">
      <toggler-view @click="onToggle" />
    </div>
    <div class="post__comments" v-show="isShow">
      <ul class="post__comments-list">
        <li class="post__comments-item" v-for="issue in issues" :key="issue.id">
          <comment-item  />
        </li>
      </ul>
    </div>
    <div class="post__date">
      {{ formatDate }}
    </div>
  </li>
</template>

<script>
/* eslint-disable */
import { UserGit } from '../UserGit'
import { TogglerView } from '../TogglerView'
import { CommentItem } from '../CommentItem'
import { months } from '../../replaceDate/months'

export default {
  name: 'PostsGit',
  components: {
    UserGit, TogglerView, CommentItem
  },
  emits: ['loadIssues'],
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
    },
    issues: {
      type: Array,
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
      this.$emit('loadIssues')
    }
  },
  computed: {
    formatDate () {
      const date = this.date.split(/-|T/).splice(0, 3).reverse()
      const formatDate = `${date[0]} ${months[date[1] - 1] }  `
      return formatDate
    }
  }
}
</script>

<style src="./posts-git.scss" lang="scss" scoped>

</style>

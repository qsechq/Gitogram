<template>
  <li class="posts__item">
    <div class="post__item-user">
      <UserGit :avatar="avatar" :name="name" />
    </div>
    <div class="c-post__item-content">
      <slot name="post"></slot>
    </div>
    <div class="c-issues">
      <issues-component :issues="issues" :isLoading="isLoading" @loadIssues="$emit('getIssuess')"/>
    </div>
    <div class="post__date">
      {{ formatDate }}
    </div>
  </li>
</template>

<script>
/* eslint-disable */
import { UserGit } from '../UserGit'
import { months } from '../../replaceDate/months'
import { issuesComponent } from '../issuesComponent'

export default {
  name: 'PostsGit',
  components: {
    UserGit, issuesComponent
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
    },
    issues: {
      type: Array,
      default: 0
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    formatDate() {
      const date = this.date.split(/-|T/).splice(0, 3).reverse()
      const formatDate = `${date[0]} ${months[date[1] - 1]}  `
      return formatDate
    }
  }
}
</script>

<style src="./posts-git.scss" lang="scss" scoped>

</style>

<template>

    <div class="post__item-toggler">
        <toggler-view @onToggle="onToggler" />
    </div>
    <div class="post__comments" v-show="isShow">
        <div class="post__placeholder" v-if="isLoading" >
            <placeholder-component :paragraphs="5" />
        </div>
        <div class="comment__container" v-else>
            <ul class="post__comments-list">
                <li class="post__comments-item" v-if="issues === 0">
                    <div class="test">
                        repository does not have issues
                    </div>
                </li>
                <li class="post__comments-item" v-for="issue in issues" :key="issue.id" v-else>
                    <comment-item :body="issue.body" :user="issue.user.login" />
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
/* eslint-disable */
import { TogglerView } from '../TogglerView'
import { CommentItem } from '../CommentItem'
import { PlaceholderComponent } from '../PlaceholderComponent'
export default {
  name: 'issuesComponent',
  components: {
    TogglerView, CommentItem, PlaceholderComponent
  },
  emits: ['loadIssues'],
  props: {
    issues: {
      type: Array,
      default: 0
    },
    isLoading: {
      type: Boolean
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    onToggler (isActive) {
      this.isShow = isActive
      if (isActive && this.issues === 0) {
        this.$emit('loadIssues')
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./issues-component.scss">

</style>

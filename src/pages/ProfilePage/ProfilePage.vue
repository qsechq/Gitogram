<template>
  <header-component>
    <template #header-top>
      <div class="header__top-content">
        <header-top />
      </div>
    </template>
  </header-component>
  <div class="x-container">
    <div class="profile">
      <div class="profile__left">
        <h2 class="profile__title">My profile</h2>
        <div class="profile__wrap">
          <user-git :name="user.login" :avatar="user.avatar_url">
            <template #info>
              <div class="profile__info">
                <div class="profile__info-left">
                  <span class="profile__info-count">{{ user.public_repos }}</span> reposts
                </div>
                <div class="profile__info-right">
                  {{ starred.length }} <router-link :to="{ name: 'watchers' }"
                    class="profile__right-link">watchers</router-link>
                </div>
              </div>
            </template>
          </user-git>
        </div>
      </div>
      <div class="profile__right">
        <div class="profile__right-wrap">
          <h2 class="profile__title">Repositories</h2>
          <div class="profile__right-count">{{ user.public_repos }}</div>
        </div>
          <div class="profile__wrap">
            <ul class="profile__list">
              <li class="profile__item" v-for="post in repos" :key="post.id">
                <post-item-git :name="post.name" :description="post.description" :star="post.stargazers_count"
                  :fork="post.forks" />
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HeaderTop } from '../../components/HeaderTop'
import { HeaderComponent } from '../../components/HeaderComponent'
import { UserGit } from '../../components/UserGit'
import { PostItemGit } from '@/components/PostItemGit'
import useUser from '../../components/composables/useUser.js'
import useRepos from '../../components/composables/useRepos.js'
import useStarred from '../../components/composables/useStarred.js'

export default {
  name: 'ProfilePage',
  components: {
    HeaderTop, HeaderComponent, UserGit, PostItemGit
  },
  setup () {
    const { user } = useUser()
    const { repos } = useRepos()
    const { starred } = useStarred()
    return {
      user,
      repos,
      starred
    }
  }
}
</script>

<style src="./profile-page.scss" lang="scss" scoped>

</style>

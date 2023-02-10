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
                  {{ starred.length }} <router-link :to="{ name: 'feeds' }"
                    class="profile__right-link">watchers</router-link>
                </div>
              </div>
            </template>
          </user-git>
        </div>
      </div>
      <div class="profile__right">
        <div class="profile__right-wrap">
          <h2 class="profile__title">Following</h2>
          <div class="profile__right-count">{{ user.public_repos }}</div>
        </div>
          <ul class="profile__right-list">
            <li class="profile__right-item" v-for="user in starred" :key="user.id">
              <div class="user__git-wr">
                <user-git :name="user.owner.login" :avatar="user.owner.avatar_url">
                <template #type>
                  <div class="user__git-type">{{ user.owner.type }}</div>
                </template>
              </user-git>
              </div>
              <div class="profile__item-btn">
                <button-component :theme="'grey'" @click="unStarRepo(user.id)">
                  <span>Unfollow</span>
                </button-component>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { HeaderTop } from '../../components/HeaderTop'
import { HeaderComponent } from '../../components/HeaderComponent'
import { UserGit } from '../../components/UserGit'
import { ButtonComponent } from '../../components/ButtonComponent'

import useUser from '../../components/composables/useUser.js'
import useRepos from '../../components/composables/useRepos.js'
import useStarred from '../../components/composables/useStarred.js'
import useUnstar from '../../components/composables/useUnstar.js'
export default {
  name: 'WatchersPage',
  components: {
    HeaderTop, HeaderComponent, UserGit, ButtonComponent
  },
  setup () {
    const { user } = useUser()
    const { repos } = useRepos()
    const { starred } = useStarred()
    const { unStarRepo } = useUnstar()
    return {
      user,
      repos,
      starred,
      unStarRepo
    }
  }
}
</script>

<style src="./watchers-page.scss" lang="scss" scoped>

</style>

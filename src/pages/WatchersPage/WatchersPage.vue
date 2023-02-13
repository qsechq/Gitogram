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
          <div class="profile__right-count">{{ starred.length }}</div>
        </div>
          <ul class="profile__right-list">
            <li class="profile__right-item" v-for="item in starred" :key="item.id">
              <div class="user__git-wr">
                <subscribe-component
                :name="item.owner.login"
                :id="item.id"
                :avatar="item.owner.avatar_url"
                :type="item.owner.type"
                @onUnFollow="unFollow(item)"
                />
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
import { SubscribeComponent } from '../../components/SubscribeComponent'
import { UserGit } from '../../components/UserGit'

import useUser from '../../components/composables/useUser.js'
import useRepos from '../../components/composables/useRepos.js'
import useStarred from '../../components/composables/useStarred.js'
import { useStore } from 'vuex'
export default {
  name: 'WatchersPage',
  components: {
    HeaderTop, HeaderComponent, SubscribeComponent, UserGit
  },
  setup () {
    const { user } = useUser()
    const { repos } = useRepos()
    const { starred } = useStarred()
    const { dispatch } = useStore()

    const unFollow = async (repo) => {
      await dispatch('starred/unFollow', repo.id)
    }
    return {
      user,
      repos,
      starred,
      unFollow
    }
  }
}
</script>

<style src="./watchers-page.scss" lang="scss" scoped>

</style>

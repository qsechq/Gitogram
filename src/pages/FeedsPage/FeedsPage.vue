<template>
    <header>
        <header-component>
            <template #header-top>
                <div class="header__top-content">
                    <header-top />
                </div>
            </template>
            <template #content v-if="trendings.length">
                <div class="header__users">
                    <ul class="header__users-list">
                        <li class="header__users-item" v-for="user in trendings" :key="user.id" :id="user.id">
                                <header-users-item :avatar="user.owner.avatar_url" :name="user.owner.login" @onPress="$router.push({name: 'stories', params: { initialSlide: user.id } })"/>
                        </li>
                    </ul>
                </div>
            </template>
        </header-component>
    </header>
    <div class="posts">
        <div class="container">
            <ul class="posts__list">
                <posts-git v-for="post in trendings" :key="post.id" :id="post.id" :name="post.owner.login"
                    :avatar="post.owner.avatar_url" :date="post.created_at">
                    <template #post>
                        <div class="post__item-content">
                            <div class="post__content">
                                <post-item-git :name="post.name" :description="post.description"
                                    :star="post.stargazers_count" :fork="post.forks" />
                            </div>
                        </div>
                    </template>
                </posts-git>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { HeaderComponent } from '@/components/HeaderComponent'
import { HeaderUsersItem } from '@/components/HeaderUsersItem'
import { PostItemGit } from '@/components/PostItemGit'
import { PostsGit } from '@/components/PostsGit'
import { HeaderTop } from '@/components/HeaderTop'

export default {
  name: 'MyFeeds',
  components: {
    HeaderComponent, HeaderUsersItem, PostsGit, PostItemGit, HeaderTop
  },
  data () {
    return {
      /* eslint-disable */

        };
    },
    methods: {
        fetchUserName(user) {
            console.log(user.id)
        },
        ...mapActions({
            getTrendings: 'trendings/getTrendings'
        }),
    },
    computed: {
        ...mapState({
            trendings: state => state.trendings.trendings,
        })
    },
    async mounted() {
        await this.getTrendings()
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles.scss";

.header__users-list {
    display: flex;
    justify-content: space-between;
}

.container {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
}

.header__users-item {
    cursor: pointer;
}

@include small-width {
    .container {
        max-width: 728px;
        margin: 0 auto;
    }

    .header__users-list {
        overflow-x: auto;
        overflow-y: hidden;
        flex-wrap: nowrap;
    }

    .header__users-list::-webkit-scrollbar {
        display: none;
    }

    .header__users-item {
        margin-right: 18px;
        min-width: 80px;
    }

}

@include tablets {
    .container {
        max-width: 708px;
        padding: 0 10px;

    }

}

@include phones {
    .container {
        max-width: 708px;
        padding: 0 10px;
    }

    .header__users-item {
        margin-right: 12px;
        min-width: 70px;
    }

}
</style>
<template>
    <header>
        <header-component>
            <template #header-top>
                <div class="header__top-content">
                    <header-top />
                </div>
            </template>
            <template #content v-if="users.length">
                <div class="header__users">
                    <ul class="header__users-list">
                        <li class="header__users-item" v-for="user in users" :key="user.id" :id="user.id">
                            <header-users-item :avatar="user.img" :name="user.name" @onPress="fetchUserName(user)" />
                        </li>
                    </ul>
                </div>
            </template>
        </header-component>
    </header>
    <div class="posts">
        <div class="container">
            <ul class="posts__list">
                <posts-git v-for="post in posts" :key="post.id" :id="post.id" :name="post.owner.login"
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
import { HeaderComponent } from '@/components/HeaderComponent'
import { HeaderUsersItem } from '@/components/HeaderUsersItem'
import { PostItemGit } from '@/components/PostItemGit'
import { PostsGit } from '@/components/PostsGit'
import { HeaderTop } from '@/components/HeaderTop'
import * as api from '../../api'
export default {
  name: 'MyFeeds',
  components: {
    HeaderComponent, HeaderUsersItem, PostsGit, PostItemGit, HeaderTop
  },
  data () {
    return {
      /* eslint-disable */
            users: [
                {
                    id: 1,
                    name: 'Josh1',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 2,
                    name: 'Josh2',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 3,
                    name: 'Josh3',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 4,
                    name: 'Josh4',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 5,
                    name: 'Josh5',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 6,
                    name: 'Josh6',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 7,
                    name: 'Josh7',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 8,
                    name: 'Josh8',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 9,
                    name: 'Josh9',
                    img: require('../../assets/avatar-list.png'),
                },
                {
                    id: 10,
                    name: 'Josh10',
                    img: require('../../assets/avatar-list.png'),
                },
            ],
            posts: []
        };
    },
    methods: {
        fetchUserName(user) {
            console.log(user.id)
        },
    },
    async created() {
        try {
            const { data } = await api.trendings.getTrendings()
            this.posts = data.items
        } catch (e) {
            console.log(e)
        }

    }
}
</script>

<style lang="scss" scoped>
.header__users-list {
    display: flex;
    justify-content: space-between;
}

.container {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
}

@media(max-width:990px) {
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

@media(max-width:768px) {
    .container {
        max-width: 708px;
        padding: 0 10px;

    }

}

@media(max-width:420px) {
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
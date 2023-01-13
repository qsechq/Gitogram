<template>
    <header>
        <my-header>
            <template #header-main>
                <div class="header__main-content">
                    <a href="/" class="header__main-logo">
                        <img src="../../assets/Gitogram.svg" alt="logo" class="header__main-img">
                    </a>
                    <div class="header__main-wrap">
                        <ul class="header__main-list">
                            <li class="header__main-item">
                                <a href="#" class="header__main-link">
                                    <div class="header__main-icon">
                                        <my-icon name="HomeSvg" />
                                    </div>
                                </a>
                            </li>
                            <li class="header__main-item">
                                <a href="#" class="header__main-link">
                                    <img src="../../assets/avatar.png" alt="home" class="header__main-avatar">
                                </a>
                            </li>
                            <li class="header__main-item">
                                <a href="#" class="header__main-link">
                                    <div class="header__main-icon">
                                        <my-icon name="LogoutSvg" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
            <template #content v-if="users.length">
                <div class="header__users">
                    <ul class="header__users-list">
                        <li class="header__users-item" v-for="user in users" :key="user.id" :id="user.id">
                            <header-users-item :img="user.img" :name="user.name" @onPress="fetchUserName(user)" />
                        </li>
                    </ul>
                </div>
            </template>
        </my-header>
    </header>
    <div class="posts">
        <div class="container">
            <ul class="posts__list">
                <my-posts :post="post"
                 v-for="post in posts"
                 :key="post.id"
                 :id="post.id"
                 :name="post.name"
                 :avatar="post.avatar"
                 :date="post.date">
                    <template #post>
                        <div class="post__item-content">
                            <div class="post__content-text">
                                <h1 class="post__item-title">{{ post.title }}</h1>
                                <h2 class="post__item-subtitle">{{ post.subtitle }}</h2>
                            </div>
                            <div class="post__content-info">
                                <div class="post__info post__info-star">
                                    <button class="post__info-btn">
                                        <div class="post__info-icon">
                                            <my-icon name="StarSvg" />
                                        </div>
                                        Star
                                    </button>
                                    <div class="post__info-counter">
                                        {{ post.star }}
                                    </div>
                                </div>
                                <div class="post__info post__info-fork">
                                    <button class="post__info-btn">
                                        <div class="post__info-icon">
                                            <my-icon name="ForkSvg" />
                                        </div>
                                        Fork
                                    </button>
                                    <div class="post__info-counter">
                                        {{ post.fork }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </my-posts>
            </ul>
        </div>
    </div>
</template>

<script>
import { MyHeader } from '@/components/MyHeader'
import { HeaderUsersItem } from '@/components/HeaderUsersItem'
import { MyPosts } from '@/components/MyPosts'
import { MyIcon } from '@/icons'

export default {
  name: 'MyFeeds',
  components: {
    MyHeader, MyIcon, HeaderUsersItem, MyPosts
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
            posts: [
                {
                    id: 1,
                    avatar: require('../../assets/avatar.png'),
                    name: 'Joas_i',
                    title: 'Vue.js',
                    subtitle: 'JavaScript framework for building interactive web applications ⚡',
                    star: '145k',
                    fork: '150',
                    date: '22 may'
                },
                {
                    id: 2,
                    avatar: require('../../assets/avatar.png'),
                    name: 'Joas_ii',
                    title: 'React.js',
                    subtitle: 'JavaScript framework for building interactive web applications ⚡',
                    star: '45k',
                    fork: '50',
                    date: '25 may'
                }
            ]
        };
    },
    methods: {
        fetchUserName(user) {
            console.log(user.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.header__main-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__main-list {
    display: flex;
    align-items: center;
}


.header__main-item {
    margin-right: 28px;

    &:last-child {
        margin-right: 0;
    }
}

.header__main-icon {
    color: #262626;
    width: 24px;
}

.header__users-list {
    display: flex;
    justify-content: space-between;
}

.post__item-title {
    font-weight: 700;
    font-size: 26px;
    line-height: 28px;
}

.post__item-subtitle {
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: #404040;
}

.container {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
}

.post__item-title {
    margin-bottom: 15px;
}



.post__content-info {
    display: flex;
    align-items: center;
    border: 1px solid rgba(27, 31, 35, 0.15);
    width: fit-content;
    border-radius: 6px;
    background: #FAFBFC;
    padding: .5px 0;
}

.post__info-btn {
    display: flex;
    align-items: center;
    padding: 0 13px;
    border-right: 1px solid rgba(27, 31, 35, 0.15);
    line-height: 27px;
}

.post__info-counter {
    border-right: 1px solid rgba(27, 31, 35, 0.15);
    padding: 0 13px;
    line-height: 27px;
    background: #fff;
}

.post__info-fork {
    & .post__info-counter {
        border:none;
        border-radius: 6px;
    }
}

.post__info {
    display: flex;
    align-items: center;
}

.post__item-subtitle {
    margin-bottom: 30px;
}

.post__info-icon {
    margin-right: 5px;
    color: #586069;
    width: 16px;
}

.post__info-btn:hover .post__info-icon {
    color: #31AE54;
    transition: 0.3s;
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

    .header__main-logo {
        width: 100px;
    }

    .header__main-icon {
        & svg {
            width: 18px;
        }
    }

    .header__main-avatar {
        width: 24px;
    }

    .header__users-item {
        margin-right: 12px;
        min-width: 70px;
    }


    .header__main-item {
        margin-right: 9px;
    }

    .post__item-title {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 7px;
    }

    .post__item-subtitle {
        font-weight: 700;
        font-size: 12px;
    }

    .post__item-subtitle {
        margin-bottom: 12px;
    }

    .post__info-btn {
        font-size: 10px;
        line-height: 26px;
    }

    .post__info-counter {
        font-size: 10px;
        line-height: 26px;
    }

    .post__info-icon {
        margin-right: 5px;
        color: #586069;
        width: 12px;
    }

}
</style>

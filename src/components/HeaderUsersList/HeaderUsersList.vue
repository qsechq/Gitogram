<template>
    <ul class="header__users-list">
        <header-users-item v-for="user in users" :user="user" :key="user.id" @onPress="'onPress', user"></header-users-item>
    </ul>
</template>

<script>
import { HeaderUsersItem } from '@/components/HeaderUsersItem'

export default {
  name: 'HeaderUserList',
  components: {
    HeaderUsersItem
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    fetchUserId (user) {
      console.log(user.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.header__users-list {
  display: flex;
  justify-content: space-between;
}

</style>

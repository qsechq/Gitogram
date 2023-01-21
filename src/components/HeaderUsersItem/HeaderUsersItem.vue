<template>

  <a href="#" class="header__users-link" @click.prevent="$emit('onPress')">
     <div class="header__users--border">
       <div class="header__users-wrap">
          <avatar-user :avatar="avatar"/>
       </div>
     </div>
     <span class="header__users-name">{{ name }}</span>
  </a>

</template>

<script>
import { AvatarUser } from '../AvatarUser'

export default {
  name: 'HeaderUserItem',
  emits: ['onPress'],
  components: {
    AvatarUser
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.header__users-link {
  display: flex;
  flex-direction: column;
  align-items: center;

  & span {
    color: #000;
    font-size: 12px;
    line-height: 10px;
  }
  &:hover .header__users--border{
    border-color: transparent;
  }
}

.header__users-wrap img{
    width: 80px;
    height: 80px;

}

.header__users--border {
  border-radius: 50%;
  border: 2px solid #A6328D;
  padding: 4px;
  margin-bottom: 10px;
  transition: 0.3s;
}
</style>

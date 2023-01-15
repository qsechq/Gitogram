<template>

  <a href="#" class="header__users-link" @click.prevent="$emit('onPress')">
     <div class="header__users--border">
       <img :src="img" alt="avatar" class="header__users-avatar">
     </div>
     <span class="header__users-name">{{ name }}</span>
  </a>

</template>

<script>

export default {
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  emits: ['onPress']

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

.header__users--border {
  border-radius: 50%;
  border: 2px solid #A6328D;
  padding: 4px;
  margin-bottom: 10px;
  transition: 0.3s;
}
</style>

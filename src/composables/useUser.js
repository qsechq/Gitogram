import { useStore } from 'vuex'
import { computed } from 'vue'

export default () => {
  const { state } = useStore()
  const user = computed(() => state.userData.userData)

  return {
    user
  }
}

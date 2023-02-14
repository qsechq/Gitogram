import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default () => {
  const { dispatch, state } = useStore()
  const repos = computed(() => state.userData.repos)
  onMounted(() => {
    dispatch('userData/getUserRepos')
  })
  return {
    repos
  }
}

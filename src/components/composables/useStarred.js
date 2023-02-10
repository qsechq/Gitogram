import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default () => {
  const { dispatch, state } = useStore()
  const starred = computed(() => state.starred.starred)
  onMounted(() => {
    dispatch('starred/getStarredRepos')
  })
  return {
    starred
  }
}

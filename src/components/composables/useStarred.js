import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default () => {
  const { dispatch, state } = useStore()
  const starred = computed(() => state.starred.starred)
  const filterStarred = onMounted(() => {
    dispatch('starred/getStarredRepos')
  })
  return {
    starred,
    filterStarred
  }
}

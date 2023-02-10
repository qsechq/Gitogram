import { useStore } from 'vuex'
import { onMounted } from 'vue'

export default () => {
  const { dispatch } = useStore()
  const unStarRepo =   onMounted(() => {
    dispatch('trendings/unStarRepo')
  })

  return {
    unStarRepo
  }
}

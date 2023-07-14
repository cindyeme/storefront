import { computed, reactive } from 'vue'
import useFetch from './useFetch'

const cacheMap = reactive(new Map())

const useFetchCache = (key = 'dogs', url = 'https://dog.ceo/api/breed/hound/images', config) => {
  const info = useFetch(url, { skip: true, ...config })

  const update = () => cacheMap.set(key, info.response.value)
  const clear = () => cacheMap.set(key, undefined)

  const fetch = async () => {
    try {
      await info.fetch()
      update()
    } catch {
      clear()
    }
  }

  const response = computed(() => cacheMap.get(key))
  const data = computed(() => response.value?.data)

  if (response.value === null) fetch()

  return { ...info, fetch, data, response, clear }
}

export default useFetchCache

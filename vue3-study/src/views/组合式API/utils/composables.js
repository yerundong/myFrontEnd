import { ref, onMounted, onUnmounted, toValue, watch, watchEffect } from 'vue'
import { sleep } from 'slitu'
const useEventListener = (target, event, callback) => {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}

export const useMouse = () => {
  // 被组合式函数封装和管理的状态
  const x = ref(0)
  const y = ref(0)
  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })
  return { x, y }
}

// 非响应函数
export const getUrl = (url) => {
  console.log('getUrl: ', url)
  const ret = ref()
  ret.value = url.value.toLocaleUpperCase()
  return ret
}

// 接收响应式状态
export const useUrl = (url) => {
  console.log('useUrl: ', url)
  const ret = ref(null)

  const fetchData = async () => {
    console.log('fetchData……')
    // 若使用 watchEffect，则 toValue(url) 需要提前到 await 前面，否则监听不到；watch 则无所谓
    const url_ = toValue(url)

    await sleep(1000)
    ret.value = url_.toLocaleUpperCase()
  }

  // 使用 watch
  // watch(
  //   url,
  //   () => {
  //     fetchData()
  //   },
  //   { immediate: true }
  // )

  // 使用watchEffect
  watchEffect(() => {
    fetchData()
  })
  return ret
}

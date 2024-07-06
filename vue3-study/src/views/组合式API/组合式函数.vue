<template>
  <div>
    <h1>组合式API-组合式函数</h1>
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
    <button @click="changeUrl">change url</button>
    <div>url: {{ url }}</div>
    <div>url_1: {{ url_1 }}</div>
    <div>url_2: {{ url_2 }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMouse, getUrl, useUrl } from './utils/composables.js'
const { x, y } = useMouse()

const url = ref('/baidu.com')
const url_1 = getUrl(url)
const url_2 = useUrl(url)

const changeUrl = () => {
  url.value += '/hi'
}
</script>

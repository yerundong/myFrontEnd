<template>
  <div style="line-height: 60px">
    参考：<a :href="`https://wangdoc.com/typescript${node}`" target="_blank"
      >阮一峰《TypeScript教程 · {{ name }}》
    </a>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps({
  node: {
    type: String,
    default: (): string => {
      const route = useRoute()
      return route.path
    }
  },
  name: {
    type: String,
    default: (): string => {
      const route = useRoute()
      return route.meta.menuName as string
    }
  }
})
</script>

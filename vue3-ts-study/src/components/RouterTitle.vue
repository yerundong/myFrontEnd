<template>
  <h1>{{ title }}</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const title = ref(route.meta.menuName)
</script>

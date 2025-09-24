<template>
  <div></div>
</template>

<script setup lang="ts">
  import { onUpdated, onMounted } from 'vue';

  onMounted((e) => {
    console.log('onMounted: ', e);
  });

  onUpdated((e) => {
    console.log('onUpdated: ', e);
  });
</script>

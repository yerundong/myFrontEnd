<template>
  <aside class="left-part">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <h1>vue3-study</h1>
    <nav>
      <div class="menu-wrap" v-for="(item, index) of routerList" :key="index">
        <RouterLink v-if="item.path && item.meta?.menuName && item.component" :to="item.path">
          {{ item.meta?.menuName }}
        </RouterLink>
        <div class="route-head" v-else-if="item.path && item.meta?.menuName && !item.component">
          {{ item.meta?.menuName }}
        </div>
        <template v-if="item.children && item.children.length > 0">
          <div class="sec-route-item" v-for="(item2, index2) of item.children" :key="index2">
            <RouterLink :to="`${item.path}/${item2.path}`">> {{ item2.meta?.menuName }}</RouterLink>
          </div>
        </template>
      </div>
    </nav>
  </aside>

  <main class="router-view">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import router from '@/router';
  import { ref } from 'vue';
  const routerList = ref(router.options.routes);
</script>

<style scoped>
  .left-part {
    width: 30%;
    height: 100vh;
    text-align: center;
  }
  .left-part nav {
    text-align: left;
    padding: 30px 60px;
    height: calc(100% - 170px);
    box-sizing: border-box;
    overflow: auto;
  }
  .router-view {
    width: 70%;
    height: calc(100vh - 20px);
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    overflow: auto;
    box-sizing: border-box;
  }
  .route-head {
    margin-top: 5px;
    font-size: 24px;
    font-weight: bold;
  }
  .sec-route-item {
  }
</style>

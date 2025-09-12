<template>
  <aside class="left-part">
    <img
      alt="formily logo"
      class="logo"
      src="https://img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg"
      width="125"
      height="125"
    />
    <h1>formily-study</h1>
    <nav>
      <div class="menu-wrap" v-for="(item, index) of routerList" :key="index">
        <RouterLink
          v-if="item.path && item.menuName && item.component"
          :to="item.path"
          >{{ item.menuName }}</RouterLink
        >
        <div
          class="route-head"
          v-else-if="item.path && item.menuName && !item.component"
        >
          {{ item.menuName }}
        </div>
        <template v-if="item.children && item.children.length > 0">
          <div
            class="sec-route-item"
            v-for="(item2, index2) of item.children"
            :key="index2"
          >
            <RouterLink
              :to="`${item.path}/${item2.path}`"
              style="padding-left: 20px"
            >
              {{ item2.menuName }}</RouterLink
            >
          </div>
        </template>
      </div>
    </nav>
  </aside>

  <main class="router-view">
    <RouterView />
  </main>
</template>
<script lang="ts" setup>
import { RouterLink, RouterView } from "vue-router";
import router from "@/router";
import { ref } from "vue";
const routerList = ref(router.options.routes);
// console.log('routerList: ', router.options.routes)
</script>

<style lang="scss" scoped>
.left-part {
  width: 400px;
  height: 100vh;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  .logo {
    width: 214px;
    height: auto;
    margin-top: 40px;
  }
}
.left-part nav {
  text-align: left;
  padding: 30px 60px;
  height: calc(100% - 170px);
  box-sizing: border-box;
  overflow: auto;
}
.router-view {
  width: calc(100vw - 400px);
  height: calc(100vh - 20px);
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  overflow: auto;
  box-sizing: border-box;
}
.route-head {
  margin-top: 5px;
  font-weight: bold;
}
.sec-route-item {
}
</style>

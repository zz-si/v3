<template>
  <n-space justify="center">
    <n-button> <router-link to="/">主页</router-link> </n-button>
    <n-button type="tertiary" @click="toUser"> 用户 </n-button>
    <n-button type="primary"> <router-link to="/login">登录</router-link> </n-button>
  </n-space>
  <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>content</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="v in data" :key="v.id">
        <td>{{ v.id }}</td>
        <td>{{ v.title }}</td>
        <td v-html="v.content"></td>
      </tr>
    </tbody>
  </n-table>
</template>

<script setup lang="ts">
// import { useCounterStore } from "@/stores/counter";
import homeApi from "@/api/home";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let data = ref({});
onBeforeMount(async () => {
  data.value = (await homeApi.home({ page: 2, limit: 5 })).data;
});
function toUser() {
  router.push({
    path: "/loginInquiry",
    query: {
      name: "用户",
    },
  });
}
// const counter = useCounterStore();
// let num = ref(0);
// let msg = ref(" JEST 单元测试 ");
// const add = () => {
//   num.value += 1;
//   counter.count++;
// };
</script>

<style lang="scss" scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: contain;
}

h1 {
  color: white;
}
</style>

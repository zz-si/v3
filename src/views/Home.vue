<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info" @click="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> {{ num }} </n-button>
    <n-button type="error" @click="add()"> {{ counter.count }} </n-button>
    <n-button type="error"> {{ msg }} </n-button>
    <h3>{{ data }}</h3>
  </n-space>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import homeApi from "@/api/home";
import { ref, defineComponent, onBeforeMount } from "vue";

let data = ref({});
onBeforeMount(async () => {
  data.value = await homeApi.home({ page: 2, limit: 5 });
});
defineComponent({
  name: "HomeVue",
});
function info() {
  // window.$message.info("I don't know why nobody told you how to unfold your love", {
  //   keepAliveOnHover: true,
  // });
}
const counter = useCounterStore();
let num = ref(0);
let msg = ref(" JEST 单元测试 ");
const add = () => {
  num.value += 1;
  counter.count++;
};
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

<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> {{ num }} </n-button>
    <n-button type="error" @click="add()"> {{ counter.count }} </n-button>
    <n-button type="error"> {{ msg }} </n-button>
  </n-space>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { ref, defineComponent } from "vue";
defineComponent({
  name: "HomeVue",
});
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

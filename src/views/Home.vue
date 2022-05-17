<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> {{ b }} </n-button>
    <n-button type="error" @click="add()"> {{ counter.count }} </n-button>
  </n-space>
  <n-carousel direction="vertical" dot-placement="right" show-arrow style="width: 100%; height: 240px">
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
    <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
  </n-carousel>
  <h1>{{ a }}</h1>
  <h1>{{ b }}</h1>
</template>
<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { ref, defineComponent } from "vue";
defineComponent({
  name: "HomeVue",
});
const counter = useCounterStore();
let b = ref(0);
const add = () => {
  b.value += 1;
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

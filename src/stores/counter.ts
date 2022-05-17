import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment() {
      this.count++;
    },
  },
  // 类似计算属性
  getters: {
    getPlusOneCount(): number {
      return this.count + 1;
    },
  },
});

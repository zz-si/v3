import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0, name: "小希" };
  },
  actions: {
    increment(n?: number) {
      (n && (this.count = n)) || this.count++;
    },
    changeName(name: string) {
      this.name = name;
    },
  },
  // 类似计算属性
  getters: {
    getPlusOneCount(): number {
      return this.count + 1;
    },
  },
});

import Home from "../src/views/Home.vue";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useCounterStore } from "@/stores/counter";
const wrapper = mount(Home, {
  global: {
    plugins: [createTestingPinia()],
  },
});
const store = useCounterStore();
store.name = "my new name";
store.changeName("温泉");
// can also be done through patch
store.$patch({ name: "new name" });
expect(store.name).toBe("new name");
describe("Home.vue", () => {
  it("display", () => {
    // const wrapper = mount(Home);
    expect(wrapper.text()).toMatch("Default Tertiary  Primary  Info  Success 00 JEST 单元测试");
  });
});

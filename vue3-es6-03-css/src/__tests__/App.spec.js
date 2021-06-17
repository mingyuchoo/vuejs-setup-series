import { mount, shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("mount", () => {
    const wrapper = mount(App);
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain("Vue3 Demo App");
  });
  it("shallowMount", () => {
    const wrapper = shallowMount(App);
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain("Vue3 Demo App");
  });
});

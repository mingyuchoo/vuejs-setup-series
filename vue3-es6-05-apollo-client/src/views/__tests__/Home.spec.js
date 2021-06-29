import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(Home);
    //console.log(wrapper.html());
    expect(wrapper.html()).toContain("Home");
  });
});

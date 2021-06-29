import { shallowMount } from "@vue/test-utils";
import Pictures from "@/views/Pictures.vue";

describe("Pictures.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(Pictures);
    console.log(wrapper.html());
    expect(wrapper.html()).toMatch(/Pictures/);
  });
});

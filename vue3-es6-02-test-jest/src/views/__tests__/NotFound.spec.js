import { shallowMount } from "@vue/test-utils";
import NotFound from "@/views/NotFound.vue";

describe("NotFound.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(NotFound);
    //console.log(wrapper.html());
    expect(wrapper.html()).toContain("NotFound");
  });
});

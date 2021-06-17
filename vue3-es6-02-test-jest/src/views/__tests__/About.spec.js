import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

describe("About.vue", () => {
  it("renders", async () => {
    const wrapper = shallowMount(About);
    //console.log(wrapper.html());
    await wrapper.find(".button").trigger("click", { button: 0 });
    expect(wrapper.html()).toContain("About");
  });
});

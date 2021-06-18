import { shallowMount } from "@vue/test-utils";
import Users from "@/views/Users.vue";

describe("Users.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(Users);
    // console.log(wrapper.html());
    expect(wrapper.html()).toContain("Users");
  });
});

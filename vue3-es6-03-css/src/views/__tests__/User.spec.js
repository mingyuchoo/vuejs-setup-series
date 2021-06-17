import { shallowMount } from "@vue/test-utils";
import User from "@/views/User.vue";

describe("User.vue", () => {
  it("renders", () => {
    const mockRoute = {
      params: {
        id: 1,
      },
    };
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(User, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    console.log(wrapper.html());
    expect(wrapper.html()).toContain("User");
  });
});

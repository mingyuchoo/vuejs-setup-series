import { shallowMount } from "@vue/test-utils";
import Picture from "@/views/Picture.vue";

describe("Picture.vue", () => {
  it("renders", () => {
    const mockRoute = {
      params: {
        id: 1,
      },
    };
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(Picture, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
    console.log(wrapper.html());
    expect(wrapper.html()).toMatch(/Picture/);
  });
});

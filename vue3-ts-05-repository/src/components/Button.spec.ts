import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("should renders", () => {
    const wrapper = shallowMount(Button, {
      props: {
        label: "Hello",
        size: "large",
      },
    });

    // console.log(wrapper.html());

    const button = wrapper.find("button");
    expect(button.text()).toBe("Hello");
    // console.log(wrapper.html());

    button.trigger("click");
    // console.log(wrapper.html());
  });
});

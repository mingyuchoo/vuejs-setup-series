import { mount, shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue - shallowMount", () => {
  const wrapper = shallowMount(Header, {
    props: {
      user: {
        id: 1,
        name: "Henry",
      },
    },
  });
  it("should renders ", () => {
    const header = wrapper.find("h1");
    expect(header.text()).toBe("Vue3");

    // console.log(wrapper.html());

    /**
     * <my-button>이 <my-button-stub>으로 html()로 나올텐데
     * 그 이유는 shallowMount를 이용했기 때문인데요,
     * shallowMount는 현재 component만 렌더링하지,
     * 외부에서 가져온 component는 stub 처리하기만 할뿐
     * 테스트 확정할 수 없습니다.
     * 상호 작용하는 것을 확인하려면 mount 를 이용하세요.
     * button에 대한 동작만 테스트하려면 button component에서 하세요.
     */
  });
});

describe("Header.vue - mount", () => {
  it("should renders logout button when a user object exists", () => {
    const wrapper = mount(Header, {
      props: {
        user: {
          id: 1,
          name: "Henry",
        },
      },
    });
    const header = wrapper.find("h1");
    expect(header.text()).toBe("Vue3");

    //console.log(wrapper.html());

    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe("Log out");
  });
  it("should renders login and signup button when a user object not exists", () => {
    const wrapper = mount(Header, {
      props: {},
    });
    const header = wrapper.find("h1");
    expect(header.text()).toBe("Vue3");

    console.log(wrapper.html());

    const buttons = wrapper.findAll("button");
    expect(buttons[0].text()).toBe("Log in");
    expect(buttons[1].text()).toBe("Sign up");
  });
});

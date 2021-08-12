import MyHeader from "./Nav.vue";

export default {
  title: "Example/Nav",
  component: MyHeader,
};

type Args = {
  user?: unknown;
};
const Template = (args: Args) => ({
  components: { MyHeader },
  setup() {
    return { ...args };
  },
  template: "<my-nav />",
});

export const Default = Template.bind({});

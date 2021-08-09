import MyHome from "./Home.vue";

export default {
  title: "Example/Home",
  component: MyHome,
};

type Args = unknown;

const Template = (args: Args) => ({
  components: { MyHome },
  setup() {
    return {};
  },
  template: "<my-home />",
});

export const Default = Template.bind({});
Default.args = {};

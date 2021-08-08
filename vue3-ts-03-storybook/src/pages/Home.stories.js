import MyHome from "./Home.vue";

export default {
  title: "Example/pages/Home",
  component: MyHome,
};

const Template = (args) => ({
  components: { MyHome },
  setup() {
    return {};
  },
  template: "<my-home />",
});

export const Default = Template.bind({});
Default.args = {};

import MyAbout from "./About.vue";

export default {
  title: "Example/pages/About",
  component: MyAbout,
};

const Template = (args) => ({
  components: { MyAbout },
  setup() {
    return {};
  },
  template: "<my-about />",
});

export const Default = Template.bind({});
Default.args = {};

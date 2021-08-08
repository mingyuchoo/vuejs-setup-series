import MyAbout from "./About.vue";

export default {
  title: "Example/pages/About",
  component: MyAbout,
};

const Template = () => ({
  components: { MyAbout },
  setup() {
    return {};
  },
  template: "<my-about />",
});

export const Default = Template.bind({});

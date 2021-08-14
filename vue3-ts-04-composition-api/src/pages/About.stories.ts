import MyAbout from "@/pages/About.vue";

export default {
  title: "Example/About",
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

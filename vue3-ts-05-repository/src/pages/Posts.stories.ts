import MyPosts from "@/pages/Posts.vue";

export default {
  title: "Example/Posts",
  component: MyPosts,
};

type Args = {
  user?: unknown;
};
const Template = (args: Args) => ({
  components: { MyPosts },
  setup() {
    return { ...args };
  },
  template: "<my-posts />",
});

export const Default = Template.bind({});

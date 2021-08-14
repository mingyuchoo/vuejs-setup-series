import MyUserRepositories from "@/pages/UserRepositories.vue";

export default {
  title: "Example/UserRepositories",
  component: MyUserRepositories,
};

type Args = {
  user?: unknown;
};
const Template = (args: Args) => ({
  components: { MyUserRepositories },
  setup() {
    return { ...args };
  },
  template: "<my-user-repositories />",
});

export const Default = Template.bind({});

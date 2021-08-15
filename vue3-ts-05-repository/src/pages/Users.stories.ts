import MyUsers from "@/pages/Users.vue";

export default {
  title: "Example/Users",
  component: MyUsers,
};

type Args = {
  user?: unknown;
};
const Template = (args: Args) => ({
  components: { MyUsers },
  setup() {
    return { ...args };
  },
  template: "<my-users />",
});

export const Default = Template.bind({});

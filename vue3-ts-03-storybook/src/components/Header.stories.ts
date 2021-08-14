import MyHeader from "@/components/Header.vue";

export default {
  title: "Example/Header",
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
  template: '<my-header :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};

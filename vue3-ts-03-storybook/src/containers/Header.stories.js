import MyHeader from "./Header.vue";

export default {
  title: "Example/containers/Header",
  component: MyHeader,
};

const Template = (args) => ({
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

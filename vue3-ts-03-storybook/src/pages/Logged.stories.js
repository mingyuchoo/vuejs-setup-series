import MyLogged from "./Logged.vue";
import * as HeaderStories from "../containers/Header.stories";

export default {
  title: "Example/pages/Logged",
  component: MyLogged,
};

const Template = (args) => ({
  components: { MyLogged },
  setup() {
    return { user: args.user };
  },
  template: '<my-logged :user="user" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

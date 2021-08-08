import MyButton from "./Button.vue";

export default {
  title: "Example/components/Button",
  component: MyButton,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    backgroundColor: { control: "color" },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  label: "Button",
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  size: "small",
};

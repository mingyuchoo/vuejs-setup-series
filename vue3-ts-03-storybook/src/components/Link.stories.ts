import MyLink from "@/components/Link.vue";

export default {
  title: "Example/Link",
  component: MyLink,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    backgroundColor: { control: "color" },
  },
};

type Args = {
  label?: string;
  size?: string;
};
const Template = (args: Args) => ({
  components: { MyLink },
  setup() {
    return { args };
  },
  template: '<my-link v-bind="args" />',
});

export const Large = Template.bind({});
Large.args = {
  label: "Link",
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Link",
};

export const Small = Template.bind({});
Small.args = {
  label: "Link",
  size: "small",
};

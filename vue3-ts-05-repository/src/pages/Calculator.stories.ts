import MyCalculator from "./Calculator.vue";

export default {
  title: "Example/Calculator",
  component: MyCalculator,
};

const Template = () => ({
  components: { MyCalculator },
  setup() {
    return {};
  },
  template: "<my-calculator />",
});

export const Default = Template.bind({});

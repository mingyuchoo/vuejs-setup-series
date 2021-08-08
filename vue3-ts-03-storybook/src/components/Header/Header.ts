import { defineComponent } from "vue";
import MyButton from "../Button";

export default defineComponent({
  name: "my-header",

  components: { MyButton },

  props: {
    user: {
      type: Object,
    },
  },

  emits: ["login", "logout", "createAccount"],
});

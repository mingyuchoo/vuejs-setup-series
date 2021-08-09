import { defineComponent } from "vue";
import MyHeader from "../Header";

export default defineComponent({
  name: "my-logged",
  components: { MyHeader },
  props: {
    user: {
      type: Object,
    },
  },
  emits: ["login", "logout", "createAccount"],
});

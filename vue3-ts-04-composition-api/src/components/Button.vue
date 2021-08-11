<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  name: "my-button",
  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value: string) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props: any, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "my-button": true,
        "my-button--primary": props.primary,
        "my-button--secondary": !props.primary,
        [`my-button--${props.size || "medium"}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.my-button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.my-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.my-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.my-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.my-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.my-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>

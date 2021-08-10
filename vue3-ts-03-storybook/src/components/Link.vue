<template>
  <a href="" :class="classes" :style="style">
    {{ label }}
  </a>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  name: "my-link",
  props: {
    label: {
      type: String,
      required: true,
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
  setup(props: any, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "my-link": true,
        [`my-link--${props.size || "medium"}`]: true,
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

<style lang="css" scoped>
.my-link {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: #333;
  background-color: transparent;
  text-decoration: none;
}
.my-link--small {
  font-size: 12px;
  padding: 10px 16px;
}
.my-link--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.my-link--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>

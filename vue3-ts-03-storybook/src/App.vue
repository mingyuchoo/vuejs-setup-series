<template>
  <my-nav />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyNav from "./components/Nav.vue";

export default defineComponent({
  name: "my-app",
  components: { MyNav },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

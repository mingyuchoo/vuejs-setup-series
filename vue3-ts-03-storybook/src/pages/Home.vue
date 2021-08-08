<template>
  <div class="home">
    <my-button size="small" @click="$emit('logout')" label="Hello World" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyButton from "../components/Button.vue";

export default defineComponent({
  name: "Home",
  components: { MyButton },
});
</script>

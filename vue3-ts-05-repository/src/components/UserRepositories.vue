<template>
  <pre>{{ repositories }}</pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserRepositories } from "@/composables/useUserRepositories";

export default defineComponent({
  name: "my-user-repositories",
  setup() {
    const { repositories, getUserRepositories } = useUserRepositories();
    return {
      repositories,
      getUserRepositories,
    };

    /* // or
    return {
      ...useUserRepositories(),
    };
    */
  },
});
</script>

<style lang="css" scoped></style>

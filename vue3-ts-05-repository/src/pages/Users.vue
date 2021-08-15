<template>
  <h1>Users</h1>
  <pre>{{ repositories }}</pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUsers } from "@/composables/useUsers";

export default defineComponent({
  name: "my-users",
  setup() {
    const { repositories, getUsers } = useUsers();
    return {
      repositories,
      getUsers,
    };

    /* // or
    return {
      ...useUsers(),
    };
    */
  },
});
</script>

<style lang="css" scoped></style>

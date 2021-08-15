<template>
  <h1>Posts</h1>
  <pre>{{ data }}</pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePosts } from "@/composables/usePosts";

export default defineComponent({
  name: "my-posts",
  async setup() {
    const { getPosts } = usePosts();
    return {
      getPosts,
    };
  },
});
</script>

<style lang="css" scoped></style>

<template>
  <div class="user">
    <h1>User {{ $route.params.id }}</h1>
    <router-link to="/users">Go back</router-link>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {},
  methods: {},
  data() {},
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
};
</script>

<style></style>

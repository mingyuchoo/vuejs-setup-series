<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
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

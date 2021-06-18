<template>
  <div class="user">
    <h2>{{ title }} {{ $route.params.id }}</h2>
    <router-link to="/users">Go back</router-link>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {},
  methods: {},
  data() {
    return {
      title: "User",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
};
</script>

<style></style>

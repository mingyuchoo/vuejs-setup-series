<template>
  <div class="picture">
    <h2>Picture {{ $route.params.id }}</h2>
    <router-link to="/pictures">Go back</router-link>
  </div>
</template>

<script>
export default {
  name: "Picture",
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

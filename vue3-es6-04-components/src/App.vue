<template>
  <div id="app">
    <h1>Vue3 Demo App</h1>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/pictures">Pictures</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/about">About</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
  computed: {},
  watch: {},
  data() {},
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
};
</script>

<style>
body {
  font-family: "Noto Sans KR", sans-serif;
  background-color: #fff5fd;
  color: #022e57;
}

h1,
h2 {
  color: #005a8d;
}
#app {
  text-align: center;
  margin-top: 1rem;
}

a:link,
a:visited {
  background-color: #fff5fd;
  color: #022e57;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:active {
  background-color: #ff96ad;
  color: #fff5fd;
}
</style>

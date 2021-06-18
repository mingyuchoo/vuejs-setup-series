<template>
  <div id="app">
    <h1>Vue3 Demo App</h1>
    <p>
      <router-link to="/">Home</router-link> |
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
  data() {},
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}

a:link,
a:visited {
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:active {
  background: green;
  color: white;
}
</style>

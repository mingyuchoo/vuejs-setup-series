<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/logged">Logged</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/calc">Calculator</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-nav",
});
</script>

<style lang="scss" scoped>
#nav {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
  a {
    font-weight: 700;
    color: #333;
    background-color: transparent;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

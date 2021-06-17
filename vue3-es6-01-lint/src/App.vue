<template>
  <div id="app">
    <h1>App!</h1>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/about">About</router-link>
    </p>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}
</style>

<template>
  <div class="users">
    <h2>Users List</h2>
    <p>counter value is {{ users.length }}</p>
    <ul>
      <li v-for="user in users" :key="user">
        <router-link :to="{ name: 'user', params: { id: user } }"
          >user {{ user }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [...Array(10).keys()],
    };
  },
  methods: {
    sayHello() {
      console.log("hello");
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
}
li {
  display: inline;
}
</style>

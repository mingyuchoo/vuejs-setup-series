<template>
  <div class="users">
    <h1>Users Title</h1>
    <p>counter value is {{ counter }}</p>
    <ol>
      <li v-for="user in users" :key="user">
        <router-link to="/users/1">user {{ user }}</router-link>
      </li>
    </ol>
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

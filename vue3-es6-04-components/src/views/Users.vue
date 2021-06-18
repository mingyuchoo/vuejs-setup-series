<template>
  <div class="users">
    <h2>{{ title }}</h2>
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
  name: "Users",
  components: {},
  methods: {
    sayHello() {
      console.log("hello");
    },
  },
  data() {
    return {
      title: "Users",
      users: [...Array(10).keys()],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
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

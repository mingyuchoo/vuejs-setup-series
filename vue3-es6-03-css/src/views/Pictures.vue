<template>
  <div class="pictures">
    <h2>Pictures List</h2>
    <p>counter value is {{ pictures.length }}</p>
    <ul>
      <li v-for="user in pictures" :key="user">
        <router-link :to="{ name: 'user', params: { id: user } }"
          >user {{ user }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pictures",
  components: {},
  methods: {
    sayHello() {
      console.log("hello");
    },
  },
  data() {
    return {
      pictures: [...Array(10).keys()],
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

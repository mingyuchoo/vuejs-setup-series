<template>
  <div class="users">
    <h2>{{ title }}</h2>
    <div v-if="ff_01">
      <select v-model="city">
        <option value="02">Seoul</option>
        <option value="21">Busan</option>
        <option value="064">Jeju</option>
      </select>
      <label><input type="checkbox" v-model="checked" /> {{ checked }}</label>
    </div>
    <p>counter value is {{ users.length }}</p>
    <ul>
      <li v-for="user in users" v-bind:key="user">
        <router-link v-bind:to="{ name: 'user', params: { id: user } }"
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
  computed: {},
  watch: {},
  data() {
    return {
      title: "Users",
      city: "064",
      checked: true,
      users: [...Array(10).keys()],
      ff_01: false,
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

select {
  width: 20%;
  padding: 10px 15px;
  border: 1px dashed blue;
  border-radius: 4px;
  background-color: #ff96ad;
}
</style>

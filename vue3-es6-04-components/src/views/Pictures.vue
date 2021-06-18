<template>
  <div class="pictures">
    <h2>{{ title }}</h2>
    Search <input type="text" v-model="search" /> Items
    <input type="number" v-model.number="count" />
    <textarea v-model="content"></textarea>
    <p>counter value is {{ pictures.length }}</p>
    <ul>
      <li v-for="picture in pictures" :key="picture">
        <router-link :to="{ name: 'picture', params: { id: picture } }"
          >picture {{ picture }}</router-link
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
      title: "Pictures",
      search: "space",
      count: 3,
      content:
        "Teams employed Branch by Abstraction many years before it got its name (Stacy Curl named it in 2007)",
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

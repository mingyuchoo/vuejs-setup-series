<template>
  <div class="about">
    <h1>About</h1>
    <p>Times clicked: {{ count }}</p>
    <input type="button" class="button" @click="increment" value="increment" />
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  methods: {
    increment() {
      this.count++;
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
};
</script>

<style>
.button {
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.button:hover {
  background: white;
  color: black;
  border: 2px solid green;
}
</style>

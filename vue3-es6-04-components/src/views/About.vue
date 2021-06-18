<template>
  <div class="about">
    <h2>About</h2>
    <p>Times clicked: {{ count }}</p>
    <input type="button" class="button" @click="increment" value="Increase" />
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
  background-color: #ff96ad;
  color: #fff5fd;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.button:hover {
  background: #fff5fd;
  color: #022e57;
  border: 2px solid #ff96ad;
}
</style>

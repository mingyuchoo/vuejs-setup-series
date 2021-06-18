<template>
  <div class="about">
    <h2>{{ title }}</h2>
    <p>Times clicked: {{ count }}</p>
    <input
      type="button"
      class="button"
      v-on:click="increment(), logger()"
      value="Increase"
    />
    <input type="button" class="button" v-on:click="reset()" value="Reset" />
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  methods: {
    increment() {
      this.count = this.count + 1;
    },
    reset() {
      this.count = 0;
    },
    logger() {
      console.log(this.count);
    },
  },
  computed: {},
  watch: {},
  data() {
    return {
      title: "About",
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
  margin: 10px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.button:hover {
  background: #fff5fd;
  color: #022e57;
  border: none;
  margin: 10px;
  padding: 10px 20px;
}
</style>

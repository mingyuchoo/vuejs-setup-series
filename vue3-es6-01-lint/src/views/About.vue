<template>
  <div class="about">
    <h1>About Title</h1>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
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
  data: () => ({
    count: 0,
  }),
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
};
</script>

<style></style>

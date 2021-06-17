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
  data: () => ({
    count: 0,
  }),
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

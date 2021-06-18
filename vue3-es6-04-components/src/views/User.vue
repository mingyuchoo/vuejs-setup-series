<template>
  <div class="user">
    <h2>{{ title }} {{ $route.params.id }}</h2>
    <div class="checkbox">
      <label
        ><input type="checkbox" v-model="checked" value="Seoul" />Seoul</label
      >
      <label
        ><input type="checkbox" v-model="checked" value="Busan" />Busan</label
      >
      <label
        ><input type="checkbox" v-model="checked" value="Jeju" />Jeju</label
      >
      <br />
      <span>Checked location: {{ checked }}</span>
    </div>
    <div class="radio">
      <label
        ><input
          type="radio"
          v-bind:value="radioValue1"
          v-model="picked"
        />Seoul</label
      >
      <label
        ><input
          type="radio"
          v-bind:value="radioValue2"
          v-model="picked"
        />Seoul</label
      >
      <label
        ><input
          type="radio"
          v-bind:value="radioValue3"
          v-model="picked"
        />Seoul</label
      >
      <br />
      <span>Picked location: {{ picked }}</span>
    </div>
    <router-link to="/users">Go back</router-link>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {},
  methods: {},
  computed: {},
  watch: {},
  data() {
    return {
      title: "User",
      checked: [],
      picked: "",
      radioValue1: "Seoul",
      radioValue2: "Busan",
      radioValue3: "Jeju",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
};
</script>

<style>
div.checkbox,
div.radio {
  padding: 20px;
}
input[type="checkbox"] {
  width: 45px;
  height: 15px;
  background: #555;
  position: relative;
  border-radios: 5px;
}
input[type="radio"] {
  width: 45px;
  height: 15px;
  background: #555;
  position: relative;
  border-radios: 5px;
}
</style>

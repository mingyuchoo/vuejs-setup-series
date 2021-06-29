<template>
  <div class="home">
    <h2>{{ title }}</h2>
    <img v-bind:src="image" />
    <br />
    <div v-if="ff_01">
      <input type="text" v-model="textValue" />
      <button type="button" v-bind:disabled="textValue == ''">Click</button>
    </div>
    <p class="poem" v-bind:class="{ active: isActive, 'text-red': hasError }">
      Vivamus, mea Lesbia, atque amemus, rumoresque senum severiorum omnes unius
      aestimemus assis! soles occidere et redire possunt: nobis cum semel
      occidit brevis lux, nox est perpetua una dormienda. da mi basia mille,
      deinde centum, dein mille altera, dein secunda centum, deinde usque altera
      mille, deinde centum. dein, cum milia multa fecerimus, conturbabimus illa,
      ne sciamus, aut ne quis malus invidere possit, cum tantum sciat esse
      basiorum.
    </p>
  </div>
  <div v-bind:style="styleObject" v-if="ff_01">Inline Style Binding</div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  methods: {},
  compted: {},
  watch: {},
  data() {
    return {
      image: "https://vuejs.org/images/logo.svg",
      title: "Home",
      textValue: "",
      isActive: true,
      hasError: false,
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
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
p.poem {
  text-align: left;
  padding: 10px 20px;
}
img {
  max-width: 30%;
  height: auto;
}
button {
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
}
input[type="text"] {
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>

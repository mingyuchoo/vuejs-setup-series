<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="clickHandler">{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMessage } from "@/composables";

export default defineComponent({
  name: "my-about",
  setup() {
    return {
      ...useMessage(),
    };
  },
});
</script>

<style lang="css" scoped>
div {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 48px 20px;
  margin: 0 auto;
  max-width: 600px;
  color: #333;
}
h1 {
  font-weight: 900;
  font-size: 48px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
}
h2 {
  font-weight: 900;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
}
p {
  margin: 1em 0;
}
a {
  text-decoration: none;
  color: #1ea7fd;
}
ul {
  padding-left: 30px;
  margin: 1em 0;
}
li {
  margin-bottom: 8px;
}
</style>

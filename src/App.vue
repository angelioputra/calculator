<template>
  <div id="app">
    <Calculator/>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "app",
  components: {
    Calculator
  }
};
</script>

<style lang="scss">
@import 'assets/sass/main.scss';
</style>

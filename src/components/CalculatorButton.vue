<template>
  <div
    class="calculator__button"
    v-bind:class="{ 'calculator__button--secondary': color === 'secondary' }"
  >{{displayText}}</div>
</template>

<script>
export default {
  name: "CalculatorButton",
  props: {
    displayText: {
      type: String,
      description: "Text to display on button"
    },
    color: {
      type: String,
      default: "primary",
      description: "Button color"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator__button {
  text-align: center;
  background-color: #def3f4;
  font-size: 38px;
  padding: 10px 20px;
  border-radius: 100px;
  margin: 10px;
  cursor: pointer;
  /* flex-grow: 1; */
}
.calculator__button--secondary {
  background-color: #FFF6DB;
}
</style>

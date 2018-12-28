<template>
  <div
    class="calculator__button"
    :class="{ 'calculator__button--secondary': color === 'secondary', 'calculator__button--small': size === 'small', 'calculator__button--clear': displayText === 'CLEAR' }"
    @click="buttonPress(displayText)"
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
      default: "",
      description: "Button color"
    },
    size: {
      type: String,
      default: "",
      description: "Font size"
    },
    buttonPress: Function
  }
};
</script>

<style scoped>

</style>

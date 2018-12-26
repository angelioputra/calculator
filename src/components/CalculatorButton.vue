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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator__button {
  text-align: center;
  background-color: #def3f4;
  font-size: 30px;
  padding: 10px 20px;
  border-radius: 100px;
  margin: 10px;
  cursor: pointer;
  width: 20px;
  /* height: 50px; */
}
.calculator__button--secondary {
  background-color: #fff6db;
}
.calculator__button--small {
  font-size: 20px;
  line-height: 30px;
}
.calculator__button--clear {
  flex-grow: 3;
}
</style>

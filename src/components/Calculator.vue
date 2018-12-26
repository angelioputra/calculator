<template>
  <div class="calculator">
    <CalculatorDisplayHistory/>
    <CalculatorDisplayActive/>
    <div class="horizontal-line"></div>
    <div class="calculator__button__container">
      <div class="calculator__button__container__row">
        <CalculatorButton displayText="1"/>
        <CalculatorButton displayText="2"/>
        <CalculatorButton displayText="3"/>
        <CalculatorButton displayText="+" color="secondary"/>
      </div>
    </div>
  </div>
</template>

<script>
import CalculatorDisplayHistory from "./CalculatorDisplayHistory";
import CalculatorDisplayActive from "./CalculatorDisplayActive";
import CalculatorButton from "./CalculatorButton";

export default {
  name: "Calculator",
  components: {
    CalculatorDisplayHistory,
    CalculatorDisplayActive,
    CalculatorButton
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  margin: auto;
  max-width: 320px;
  min-height: 600px;
  border: 1px solid aquamarine;
  padding: 20px;
}
.horizontal-line {
  border: 1px solid gray;
}
.calculator__button__container {
  margin: 0px -10px;
}
.calculator__button__container__row{
  display: flex;
  justify-content: space-between;
}
</style>

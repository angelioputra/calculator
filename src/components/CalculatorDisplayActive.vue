<template>
  <div class="calculator__display--active">
    <div>=</div>
    <div>{{displayDigit}}</div>
  </div>
</template>

<script>
export default {
  name: "CalculatorDisplayActive",
  props: {
    displayDigit: {
      type: String,
      default: 0,
      description: "Display number"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator__display--active {
  text-align: right;
  font-size: 44px;
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
}
</style>

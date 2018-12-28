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

<style scoped>

</style>

<template>
  <div class="calculator__display--active">
    <div>=</div>
    <div>5</div>
  </div>
</template>

<script>
export default {
  name: "CalculatorDisplayActive",
  props: {}
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

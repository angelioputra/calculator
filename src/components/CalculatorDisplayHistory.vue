<template>
  <div class="calculator__display--history">{{ history }}</div>
</template>

<script>
export default {
  name: "CalculatorDisplayHistory",
  computed: {
    history() {
      return this.$store.getters.history;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator__display--history {
  text-align: right;
  min-height: 10vh;
}
</style>

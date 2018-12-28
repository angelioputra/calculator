<template>
  <div id="calculator__display" class="calculator__display--history">
    <div v-for="(item, index) in histories" :key="index">{{item}}</div>
    <div>{{ history }}</div>
  </div>
</template>

<script>
export default {
  name: "CalculatorDisplayHistory",
  props: {
    histories: {
      type: Array,
      description: "Calculate history"
    }
  },
  computed: {
    history() {
      return this.$store.getters.history;
    }
  }
};
</script>

<style scoped>
</style>

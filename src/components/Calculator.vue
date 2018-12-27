<template>
  <div class="calculator">
    <calculator-display-history></calculator-display-history>
    <calculator-display-active :displayDigit="displayDigit"></calculator-display-active>
    <div class="horizontal-line"></div>
    <div class="calculator__button__container">
      <div class="calculator__button__container__row">
        <calculator-button displayText="CLEAR" :buttonPress="buttonPress" size="small"></calculator-button>
        <calculator-button displayText="x" :buttonPress="buttonPress" color="secondary"></calculator-button>
      </div>
      <div class="calculator__button__container__row">
        <calculator-button displayText="1" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="2" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="3" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="+" :buttonPress="buttonPress" color="secondary"></calculator-button>
      </div>
      <div class="calculator__button__container__row">
        <calculator-button displayText="4" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="5" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="6" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="-" :buttonPress="buttonPress" color="secondary"></calculator-button>
      </div>
      <div class="calculator__button__container__row">
        <calculator-button displayText="7" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="8" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="9" :buttonPress="buttonPress"></calculator-button>
        <calculator-button
          displayText="/"
          :buttonPress="buttonPress"
          color="secondary"
          size="small"
        ></calculator-button>
      </div>
      <div class="calculator__button__container__row">
        <calculator-button
          displayText="+/-"
          :buttonPress="buttonPress"
          color="secondary"
          size="small"
        ></calculator-button>
        <calculator-button displayText="0" :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="." :buttonPress="buttonPress"></calculator-button>
        <calculator-button displayText="=" :buttonPress="buttonPress" color="secondary"></calculator-button>
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
  data: function() {
    return {
      displayDigit: "0",
      result: 0,
      clearNext: false, // Flag to flush Display Digit
      prevOperator: ""
    };
  },
  methods: {
    buttonPress(value) {
      // console.log(value);
      let displayDigit = this.displayDigit;
      if (displayDigit === "0") {
        displayDigit = "";
      }
      if (!isNaN(value) || value === ".") {
        // If number
        if (this.clearNext) {
          this.displayDigit = value;
          this.clearNext = false;
        } else {
          this.displayDigit = displayDigit.concat(value);
        }
      } else {
        if (value === "+/-") {
          this.displayDigit = "" + parseFloat(this.displayDigit, 0) * -1;
        } else {
          this.clearNext = true;
          const operators = ["+", "-", "x", "/"];
          // Reset Digit
          if (value === "CLEAR") {
            // Reset Result
            this.$store.dispatch("clearHistory", value);
            this.result = 0;
            this.displayDigit = "0";
            this.prevOperator = "";
          } else if (value === "=") {
            // Show Result
            this.$store.dispatch("addHistory", value);
            this.calculate();
            this.result = 0;
          } else if (operators.includes(value)) {
            this.$store.dispatch("addHistory", value);
            this.calculate();
            this.prevOperator = value;
          }
        }
      }
    },
    calculate() {
      const currentNumber = parseFloat(this.displayDigit, 0);
      switch (this.prevOperator) {
        case "+":
          this.result = this.result + currentNumber;
          break;
        case "-":
          this.result = this.result - currentNumber;
          break;
        case "x":
          this.result = this.result * currentNumber;
          break;
        case "/":
          this.result = this.result / currentNumber;
          break;
        default:
          this.result = currentNumber;
      }
      this.$store.dispatch("addHistory", this.displayDigit);
      this.displayDigit = "" + this.result;
    }
  },
  components: {
    CalculatorDisplayHistory,
    CalculatorDisplayActive,
    CalculatorButton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  margin: auto;
  max-width: 300px;
  min-height: 400px;
  border: 1px solid aquamarine;
  padding: 20px;
}
.horizontal-line {
  border: 1px solid gray;
}
.calculator__button__container {
  margin: 0px -10px;
}
.calculator__button__container__row {
  display: flex;
  justify-content: space-between;
}
</style>

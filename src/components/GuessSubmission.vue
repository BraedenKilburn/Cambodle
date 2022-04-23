<template>
  <div class="guessSubmission">
    <form @submit.prevent="makeGuess">
      <div class="flex flex-col">
        <ejs-combobox
          id="combobox"
          :dataSource="provinces"
          placeholder="Guess the province (e.g., Phnom Penh)"
          allowFiltering="true"
          :fields="fields"
          name="guess"
        ></ejs-combobox>
        <button type="submit" class="btn btn-outline-dark mt-3">
          <span>&#127472;&#127469; Submit Guess</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import Provinces from "@/assets/data/provinces.json";
import ConfettiGenerator from "confetti-js";

export default {
  name: "GuessSubmission",
  components: {
    "ejs-combobox": ComboBoxComponent,
  },
  data() {
    return {
      guessedProvince: "",
      provinces: Provinces.provinces,
      fields: { text: "name", value: "name" },
    };
  },
  methods: {
    makeGuess(submitEvent) {
      this.guessedProvince = submitEvent.target.elements.guess.value;
      this.$parent.guessedProvince.push(this.guessedProvince);
      this.$parent.guessCount += 1;

      if (this.guessedProvince === this.$parent.province.name) {
        this.$parent.solved = true;
        var confettiElement = document.getElementById("game");
        var confettiSettings = { target: confettiElement };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(() => {
          confetti.clear();
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

.guessSubmission {
  margin: 10px 55px;
}

button {
  width: 100%;
}
</style>

<template>
  <div class="guessSubmission">
    <v-combobox
      v-model="guess"
      id="combobox"
      label="Guess the province (e.g., Phnom Penh)"
      :items="provinces"
      variant="underlined"
      :disabled="disabled"
    />
    <v-btn :disabled="disabled" @click="makeGuess"
      >&#127472;&#127469; Submit Guess</v-btn
    >
  </div>
</template>

<script>
import Provinces from "@/assets/data/ordered_provinces.json";
import ConfettiGenerator from "confetti-js";

export default {
  name: "GuessSubmission",
  props: {
    continuePlaying: Boolean,
  },
  data() {
    return {
      guess: "",
      disabled: false,
      provinces: Provinces,
      fields: { text: "name", value: "name" },
    };
  },
  methods: {
    makeGuess() {
      this.$parent.guessedProvince.push(this.guess);
      this.$parent.guessCount += 1;

      if (this.guess === this.$parent.province.name) {
        this.$parent.solved = true;
        this.turnOffForm();

        var confettiElement = document.getElementById("game");
        var confettiSettings = { target: confettiElement };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(() => {
          confetti.clear();
        }, 3000);
      }

      if (this.$parent.guessCount === 6) {
        this.disabled = true;
      }
    },
  },
};
</script>

<style scoped>
.guessSubmission {
  margin: 10px 55px;
}
</style>

<template>
  <v-container class="game-container d-flex flex-column align-center pt-0">
    <img :src="imageSrc" alt="Cambodia Map">

    <div v-if="gameStatus.outcome" class="game-results">
      <span> {{ gameStatus.outcome }} </span>
      <p>
        Correct Answer: {{ answer.name }}
      </p>
    </div>

    <div v-if="guessedProvince.length" class="guesses">
      <GuessRow
        v-for="guess, index in guessedProvince"
        :key="index"
        :answer="answer.name"
        :guessed-province="guess"
      />
    </div>

    <div class="guess-submission mt-4">
      <v-combobox
        clearable
        v-model="guess"
        id="combobox"
        label="Guess the province (e.g., Phnom Penh)"
        variant="underlined"
        :items="provinces"
        :disabled="disabled"
      />
      <v-btn color="success" :disabled="disabled" @click="makeGuess"
        >&#127472;&#127469; Submit Guess</v-btn
      >
    </div>
  </v-container>
</template>

<script>
import GuessRow from "@/components/GuessRow.vue";
import Provinces from "@/assets/data/ordered_provinces.json";
import RandomizedProvinces from "@/assets/data/random_provinces.json";

export default {
  name: "GameView",
  components: {
    GuessRow,
  },
  data() {
    return {
      guessCount: 0,
      guessedProvince: [],
      guess: null,
      disabled: false,
      solved: false,
      provinces: Provinces,
    };
  },
  computed: {
    answer() {
      const index = new Date().getDate() % 25;
      return RandomizedProvinces.provinces[index];
    },
    gameStatus() {
      return {
        gameOver: this.solved || this.guessCount === 6,
        outcome: this.guessCount === 6 ? "Game Over" : "",
      };
    },
    imageSrc() {
      const provinceName = this.answer.imgSrc;
      const imageType = this.gameStatus.gameOver ? "answer" : "empty";
      return new URL(`/src/assets/images/${provinceName}_${imageType}.png`, import.meta.url)
    },
  },
  methods: {
    makeGuess() {
      this.guessedProvince.push(this.guess);
      this.guessCount = this.guessedProvince.length;
      
      this.solved = (this.guess === this.answer.name && this.guessCount !== 6) ? true : false;
      this.disabled = this.solved;
    },
  },
};
</script>

<style scoped>
img {
  height: 300px;
  width: 300px;
}

.game-results {
  text-align: center;
  margin-bottom: 1.5rem;
}

.game-results > span {
  color: red;
  font-weight: bold;
  font-size: 2rem;
}

.guess-submission {
  width: 50vw;
  text-align: center;
}
</style>

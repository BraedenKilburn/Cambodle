<template>
  <v-container class="game-container d-flex flex-column align-center pt-0">
    <img :src="imageSrc" alt="Cambodia Map">

    <div v-if="gameStatus.gameOver" class="game-results">
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
        :disabled="guessCount === 6 || solved"
      />
      <v-btn color="success" :disabled="disabled" @click="makeGuess"
        >&#127472;&#127469; Submit Guess</v-btn
      >
    </div>
  </v-container>
</template>

<script lang="ts">
import GuessRow from "@/components/GuessRow.vue";
import Provinces from "@/assets/data/ordered_provinces.json";
import RandomizedProvinces from "@/assets/data/random_provinces.json";

interface IGameViewData {
  guessCount: number;
  guessedProvince: string[];
  guess: string | null;
  solved: boolean;
  provinces: string[];
}

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
      solved: false,
      provinces: Provinces as string[],
    };
  },
  computed: {
    answer() {
      const index = new Date().getDate() % 25;
      return RandomizedProvinces.provinces[index];
    },
    disabled() {
      if (!this.guess) return true;
      return this.guessedProvince.includes(this.guess);
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
      return new URL(`/src/assets/images/${provinceName}_${imageType}.png`, import.meta.url).toString();
    },
  },
  methods: {
    makeGuess() {
      if (!this.guess) return;

      this.guessedProvince.push(this.guess);
      this.guessCount = this.guessedProvince.length;
      
      this.solved = (this.guess === this.answer.name && this.guessCount !== 6) ? true : false;
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

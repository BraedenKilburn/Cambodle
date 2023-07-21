<script lang="ts">
import GuessRow from "@/components/GuessRow.vue";
import Provinces from "@/assets/data/ordered_provinces.json";
import RandomizedProvinces from "@/assets/data/random_provinces.json";

interface IGameViewData {
  guessesAllowed: number;
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
  data(): IGameViewData {
    return {
      guessesAllowed: 6,
      guessCount: 0,
      guessedProvince: Array(6),
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
        gameOver: this.solved || this.guessCount === this.guessesAllowed,
        outcome: this.guessCount === this.guessesAllowed ? "Game Over" : "",
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

      this.guessedProvince[this.guessCount] = this.guess;
      this.guessCount++;
      
      this.solved = (this.guess === this.answer.name && this.guessCount !== this.guessesAllowed) ? true : false;
    },
  },
};
</script>

<template>
  <v-container class="game-container d-flex flex-column align-center pt-0">
    <img :src="imageSrc" alt="Cambodia Map">

    <div v-if="gameStatus.gameOver" class="game-results">
      <span> {{ gameStatus.outcome }} </span>
      <p>
        Correct Answer: {{ answer.name }}
      </p>
    </div>

    <div class="guesses">
      <GuessRow
        v-for="(guess, index) in guessedProvince"
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
        :disabled="guessCount === guessesAllowed || solved"
      />
      <v-btn color="success" :disabled="disabled" @click="makeGuess"
        >&#127472;&#127469; Submit Guess</v-btn
      >
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.game-container {
  --width: 90%;
}

img {
  width: 300px;
  aspect-ratio: 1 / 1;
}

.game-results {
  text-align: center;
  margin-bottom: 1.5rem;

  span {
    color: red;
    font-weight: bold;
    font-size: 2rem;
  }
}

.guesses {
  width: var(--width);
}

.guess-submission {
  width: var(--width);
  text-align: center;
}

@media screen and (min-width: 600px) {
  .game-container {
    --width: 400px;
  }
}
</style>

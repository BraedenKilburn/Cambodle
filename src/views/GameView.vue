<script setup lang="ts">
import { ref, computed } from "vue";
import GuessRow from "@/components/GuessRow.vue";
import OrderedProvinces from "@/assets/data/ordered_provinces";
import RandomizedProvinces from "@/assets/data/random_provinces";

const GUESSES_ALLOWED = 6;
const guessCount = ref(0);
const guessedProvinces = ref(Array<string>());
const guess = ref<string | null>(null);
const solved = ref(false);
const provinces = ref(OrderedProvinces);

const answer = computed(() => {
  const index = new Date().getDate() % 25;
  return RandomizedProvinces.provinces[index];
});

const gameStatus = computed(() => {
  return {
    gameOver: solved.value || guessCount.value === GUESSES_ALLOWED,
    outcome: guessCount.value === GUESSES_ALLOWED ? "Game Over" : "You Win!",
  };
});

const imageSrc = computed(() => {
  const provinceName = answer.value.imgSrc;
  const imageType = gameStatus.value.gameOver ? "answer" : "empty";
  return new URL(`/src/assets/images/${provinceName}_${imageType}.png`, import.meta.url).toString();
});

const hasRemainingGuesses = computed(() => guessCount.value < GUESSES_ALLOWED);

function makeGuess() {
  // Prevent submitting empty guesses
  if (!guess.value) return;

  // Update guessed provinces and increment guess count
  guessedProvinces.value[guessCount.value] = guess.value;
  guessCount.value++;

  solved.value = guess.value === answer.value.name && hasRemainingGuesses.value;

  // If the guess is incorrect and there are remaining guesses,
  // remove the guessed province from the list of provinces
  // and reset the guess value
  if (!solved.value && hasRemainingGuesses.value) {
    provinces.value = provinces.value.filter((province) => province !== guess.value);
    guess.value = null;
  }
}
</script>

<template>
  <v-container class="game-container">
    <div class="image-container">
      <img :src="imageSrc" alt="Cambodia Map">
    </div>

    <div class="gameplay-container">
      <div v-if="gameStatus.gameOver" class="game-results">
        <span :class="{correct: solved}"> {{ gameStatus.outcome }} </span>
        <p>
          Correct Answer: {{ answer.name }}
        </p>
      </div>
      <div class="guesses">
        <TransitionGroup name="list" tag="div">
          <GuessRow
            v-for="(guess, index) in guessedProvinces"
            v-memo="[guess]"
            :key="index"
            :answer="answer.name"
            :guessed-province="guess"
          />
        </TransitionGroup>
      </div>
      <div class="guess-submission mt-4">
        <v-combobox
          clearable
          autocomplete="off"
          v-model="guess"
          id="combobox"
          label="Guess the province (e.g., Phnom Penh)"
          variant="outlined"
          :items="provinces"
          :disabled="guessCount === GUESSES_ALLOWED || solved"
        />
        <v-btn color="success" :disabled="!guess" @click="makeGuess"
          >&#127472;&#127469; Submit Guess</v-btn
        >
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.game-container {
  --width: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;

  .image-container {
    margin-bottom: 10px;

    img {
      width: 300px;
      aspect-ratio: 1 / 1;
    }
  }

  .gameplay-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--width);

    .game-results {
      text-align: center;
      margin-bottom: 1.5rem;

      span {
        color: red;
        font-weight: bold;
        font-size: 2rem;

        &.correct {
          color: green;
        }
      }
    }

    .guesses {
      width: var(--width);

      .list-move,
      .list-enter-active,
      .list-leave-active {
        transition: all 0.5s ease;
      }

      .list-enter-from,
      .list-leave-to {
        opacity: 0;
        transform: translateY(20px);
      }

      .list-leave-active {
        position: absolute;
      }
    }

    .guess-submission {
      width: var(--width);
      text-align: center;

      .v-btn {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 600px) {
  .game-container {
    --width: 400px;
  }
}

@media screen and (min-width: 960px) {
  .game-container {
    height: 100%;
    flex-direction: row;
    justify-content: space-around;

    .image-container {
      img {
        width: 500px;
      }
    }
  }
}
</style>

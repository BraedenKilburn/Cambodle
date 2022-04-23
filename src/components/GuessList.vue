<template>
  <div class="guesses">
    <GuessRow
      v-for="i in numberOfGuesses"
      :key="i"
      :guessed-province="guessedProvinces.at(i)"
    />
  </div>
</template>

<script>
import GuessRow from "./GuessRow.vue";

export default {
  props: {
    numberOfGuesses: Number,
    guessedProvinces: [],
  },
  data() {
    return {};
  },
  components: {
    GuessRow,
  },
};
</script>

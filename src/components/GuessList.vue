<template>
  <div class="guesses">
    <GuessRow
      v-for="i in numberOfGuesses"
      :key="i"
      guessed-province="Kampong Thom"
    />
  </div>
</template>

<script>
import GuessRow from "./GuessRow.vue";

export default {
  data() {
    return {
      numberOfGuesses: 6,
    };
  },
  components: {
    GuessRow,
  },
};
</script>

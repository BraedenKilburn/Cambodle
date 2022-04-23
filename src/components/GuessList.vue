<template>
  <div class="guesses">
    <GuessRow
      v-for="guess in this.$parent.guessedProvince"
      :key="guess"
      :guessed-province="guess"
    />
  </div>
</template>

<script>
import GuessRow from "./GuessRow.vue";

export default {
  data() {
    return {};
  },
  components: {
    GuessRow,
  },
};
</script>

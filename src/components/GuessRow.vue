<template>
  <div class="row" :class="{ green: correctAnswer, red: !correctAnswer }">
    <v-icon v-if="correctAnswer" class="mr-2" icon="mdi-check-circle-outline" color="white" />
    <v-icon v-else class="mr-2" icon="mdi-alpha-x-circle-outline" color="error" />
    {{ guessedProvince }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    answer: String,
    guessedProvince: String,
  },
  computed: {
    correctAnswer() {
      return this.guessedProvince === this.answer;
    },
  },
});
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  background-color: #ccc6;
  height: 2rem;
  outline: solid black 2px;
  padding: 0 45px;
  border-radius: 0.25rem;
  margin-bottom: 10px;
}

.green {
  background-color: var(--green);
  color: white;
  font-weight: bold;
  border-radius: 0.25rem;
}

.red {
  background-color: var(--softRed);
}
</style>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{
  answer: string;
  guessedProvince?: string;
}>();

const correctAnswer = computed(() => props.guessedProvince === props.answer);
const incorrectAnswer = computed(() => props.guessedProvince !== props.answer);
const noAnswer = computed(() => props.guessedProvince === undefined);
</script>

<template>
  <div class="row" :class="{ green: correctAnswer, red: incorrectAnswer, gray: noAnswer }">
    <v-icon v-if="correctAnswer" class="mr-2" icon="mdi-check-circle-outline" color="white" />
    <div v-else-if="noAnswer" />
    <v-icon v-else class="mr-2" icon="mdi-alpha-x-circle-outline" color="error" />
    {{ guessedProvince }}
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  outline: solid black 2px;
  border-radius: 0.25rem;
  margin-bottom: 10px;
}

.green {
  background-color: var(--green);
  color: white;
  font-weight: bold;
}

.red {
  background-color: var(--softRed);
}

.gray {
  background-color: var(--lightGray);
}
</style>

<template>
  <div class="row" :class="{ green: correctAnswer, red: wrongAnswer }">
    <div class="col" :class="{ green: correctAnswer, red: wrongAnswer }">
      <i v-if="this.wrongAnswer" class="fa-solid fa-xmark fa-xl"></i>
      <i v-else class="fa-solid fa-check fa-lg"></i>
      {{ guessedProvince }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correctAnswer: false,
      wrongAnswer: false,
    };
  },
  props: {
    guessedProvince: String,
  },
  created() {
    if (this.guessedProvince === this.$parent.$parent.province.name) {
      this.correctAnswer = true;
    } else {
      this.wrongAnswer = true;
    }
  },
};
</script>

<style scoped>
.row {
  background-color: #ccc6;
  height: 2rem;
  outline: solid black 2px;
  margin: 10px 55px;
  border-radius: 0.25rem;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
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

i.fa-solid.fa-xmark {
  margin-right: 0.5rem;
  color: var(--hardRed);
}

i.fa-solid.fa-check {
  margin-right: 0.5rem;
  color: white;
}
</style>

<template>
  <div class="row" :class="{ green: correctAnswer }">
    <div class="col" :class="{ green: correctAnswer }">
      {{ guessedProvince }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correctAnswer: false,
    };
  },
  props: {
    guessedProvince: String,
  },
  created() {
    if (this.guessedProvince === this.$parent.$parent.province.name) {
      this.correctAnswer = true;
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
</style>

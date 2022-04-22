<template>
  <div class="row">
    <div class="col">{{ guessedProvince }}</div>
  </div>
</template>

<script>
export default {
  props: {
    guessedProvince: String,
  },
};
</script>

<style scoped>
.row {
  background-color: #ccc6;
  height: 2rem;
  outline: solid black 3px;
  margin: 10px 55px;
  border-radius: 0.25rem;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <span> {{ outcome }} </span>
  <p v-if="this.outcome !== ''">
    Correct Answer: {{ this.$parent.province.name }}
  </p>
</template>

<script>
export default {
  props: {
    outcome: String,
  },
};
</script>

<style scoped>
span {
  color: red;
  font-weight: bold;
  font-size: 2rem;
}
</style>

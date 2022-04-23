<template>
  <div class="game">
    <MapImage :src="this.province.imgsrc" :solved="isSolved()" />
    <PrintOutcome :outcome="this.getOutcome()" />
    <GuessList />
    <GuessSubmission />
  </div>
</template>

<script>
import MapImage from "@/components/MapImage.vue";
import PrintOutcome from "@/components/PrintOutcome.vue";
import GuessList from "@/components/GuessList.vue";
import GuessSubmission from "@/components/GuessSubmission.vue";
import Provinces from "@/assets/data/provinces.json";

export default {
  name: "HomeView",
  components: {
    MapImage,
    PrintOutcome,
    GuessList,
    GuessSubmission,
  },
  data() {
    return {
      guessCount: 0,
      guessedProvince: [],
      province: this.getProvince(),
      solved: false,
    };
  },
  methods: {
    getProvince() {
      return Provinces.provinces.at(new Date().getDate() % 25);
    },
    isSolved() {
      return this.solved || this.guessCount === 6 ? "answer" : "empty";
    },
    getOutcome() {
      return this.guessCount === 6 ? "Game Over" : "";
    },
  },
};
</script>

<style scoped>
.game {
  width: 100%;
  max-width: var(--game-max-width);
  margin: 0 auto;
  height: calc(100% - var(--header-height));
  display: flex;
  flex-direction: column;
}
</style>

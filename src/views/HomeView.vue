<template>
  <div class="game">
    <MapImage :src="this.province.imgsrc" :solved="isSolved()" />
    <GuessList />
    <GuessSubmission />
  </div>
</template>

<script>
import MapImage from "@/components/MapImage.vue";
import GuessList from "@/components/GuessList.vue";
import GuessSubmission from "@/components/GuessSubmission.vue";
import Provinces from "@/assets/data/provinces.json";

export default {
  name: "HomeView",
  components: {
    MapImage,
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
      return this.solved ? "answer" : "empty";
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

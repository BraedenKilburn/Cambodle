<template>
  <div class="game">
    <MapImage />
    <GuessList />
    <GuessSubmission />
  </div>
</template>

<script>
import MapImage from "@/components/MapImage.vue";
import GuessList from "@/components/GuessList.vue";
import GuessSubmission from "@/components/GuessSubmission.vue";

export default {
  name: "HomeView",
  components: {
    MapImage,
    GuessList,
    GuessSubmission,
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

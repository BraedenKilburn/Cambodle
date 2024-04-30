<script setup lang="ts">
import { ref } from "vue";
import FooterBar from "@/components/FooterBar.vue";

const tutorialDialog = ref(false);
</script>

<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-toolbar-title class="title">Cambodle</v-toolbar-title>

      <v-btn icon @click="tutorialDialog = true">
        <v-icon icon="mdi-help-circle-outline" />
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <FooterBar />

    <v-dialog v-model="tutorialDialog" max-width="600">
      <v-card title="How to Play">
        <v-card-text>
          <p>
            Cambodle is a fun guessing game where you need to
            <strong>identify the highlighted Cambodian province</strong>
            of the day within six attempts. Enter the name of the
            province you think is correct in the input box and submit your guess.
          </p>
          <p>Can you guess the correct province in six tries or less?</p>
        </v-card-text>
        <v-card-actions>
          <v-btn text="Close" variant="text" @click="tutorialDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style scoped>
.title {
  font-family: "nyt-karnakcondensed";
  font-weight: 700;
  font-size: 37px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-align: center;
  pointer-events: none;
}

.v-card-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
}
</style>
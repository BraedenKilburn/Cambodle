<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="title">Cambodle</v-toolbar-title>

      <div class="menu-right">
        <v-icon class="mr-3" icon="mdi-help-circle-outline" />
        <v-icon class="mr-3" icon="mdi-poll" />
        <v-icon class="mr-3" icon="mdi-cog" />
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <FooterBar />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterBar from "@/components/FooterBar.vue";

export default defineComponent({
  components: {
    FooterBar,
  },
  data: () => ({ 
    drawer: false,
  }),
});
</script>

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
</style>
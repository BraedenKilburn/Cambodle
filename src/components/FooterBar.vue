<template>
  <v-footer class="flex-grow-0">
    <v-row justify="center" no-gutters>
      <v-btn
        color="black"
        variant="plain"
        class="mx-2"
        href="https://github.com/BraedenKilburn/Cambodle"
        target="_blank"
        rel="noopener noreferrer"
        prepend-icon="mdi-github"
      >
        Created by Braeden Kilburn - {{ new Date().getFullYear() }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

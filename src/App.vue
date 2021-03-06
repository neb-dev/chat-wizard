<template>
  <v-app>
    <v-navigation-drawer app class="accent">
      <notepad />
      <notepad />
      <notepad />
    </v-navigation-drawer>

    <v-app-bar app flat class="accent">
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="primary">
      <!-- Provides the application the proper gutter -->
      <v-container fluid> </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Notepad from "./components/Notepad.vue";

export default {
  name: "App",
  components: {
    Notepad
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
/* #app {
  background-color: var(--v-background-base);
} */
</style>

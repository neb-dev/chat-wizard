<template>
  <v-app>
    <v-navigation-drawer app class="secondary">
      <v-container px-0>
        <notepad class="notepad" />
        <notepad class="notepad" />
        <notepad class="notepad" />
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app flat class="secondary">
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="background">
      <!-- Provides the application the proper gutter -->
      <v-container fluid></v-container>
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
.notepad {
  border-bottom: 1px solid rgba(248, 248, 242, 0.4);
}
.notepad:last-child {
  border-bottom: none;
}
</style>

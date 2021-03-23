<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
          depressed
          class="accent ma-2"
          v-for="script in scripts"
          :key="script.id"
          >{{ script.title }}</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      scripts: [
        {
          id: 1,
          title: "Button 1"
        },
        {
          id: 2,
          title: "Button 2"
        },
        {
          id: 3,
          title: "Button 3"
        },
        {
          id: 4,
          title: "Button 4"
        },
        {
          id: 5,
          title: "Button 5"
        },
        {
          id: 6,
          title: "Button 6"
        },
        {
          id: 7,
          title: "Button 7"
        }
      ]
    };
  }
};
</script>

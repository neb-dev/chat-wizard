<template>
  <v-card flat>
    <v-tabs v-model="tab" background-color="background">
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat class="background">
          <v-card-title class="headline">
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <script-preview />
                </v-col>
                <v-col>
                  <script-grid />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ScriptPreview from "./ScriptPreview.vue";
import ScriptGrid from "./ScriptGrid.vue";
export default {
  components: {
    ScriptPreview,
    ScriptGrid
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "One", title: "Templates", content: "Tab 1 Content" },
        { tab: "Two", content: "Tab 2 Content" },
        { tab: "Three", content: "Tab 3 Content" },
        { tab: "Four", content: "Tab 4 Content" },
        { tab: "Five", content: "Tab 5 Content" },
        { tab: "Six", content: "Tab 6 Content" },
        { tab: "Seven", content: "Tab 7 Content" },
        { tab: "Eight", content: "Tab 8 Content" },
        { tab: "Nine", content: "Tab 9 Content" },
        { tab: "Ten", content: "Tab 10 Content" }
      ]
    };
  }
};
</script>

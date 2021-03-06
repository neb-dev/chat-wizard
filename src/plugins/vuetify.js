import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      dark: {
        primary: "#282A36",
        accent: "#44475a",
        secondary: "#FF79C6",
        success: "#50FA7B",
        info: "#8BE9FD",
        warning: "#BD93F9",
        error: "#FF5555"
        // background: "#282A36"
      }
    }
  }
});

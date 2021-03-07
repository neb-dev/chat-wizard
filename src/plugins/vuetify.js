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
        primary: "#f8f8f2",
        secondary: "#44475a",
        accent: "#FF79C6",
        error: "#FF5555",
        info: "#8BE9FD",
        success: "#50FA7B",
        warning: "#BD93F9",
        background: "#282A36"
      }
    }
  }
});

<template>
  <div class="notepad">
    <v-card tile class="background">
      <v-form>
        <v-container>
          <v-row class="mt-0 mb-1 py-0">
            <v-col class="my-0 py-0">
              <v-text-field
                v-model="name"
                label="name"
                clearable
                class="my-0 py-0"
                dense
                single-line
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-1 py-0">
            <v-col class="my-0 py-0">
              <v-switch
                v-model="verified"
                inset
                :label="`verified: ${verified.toString()}`"
                color="success"
                class="my-0 py-0"
                dense
                height="5px"
              ></v-switch>
            </v-col>
          </v-row>
          <v-row class="my-1 py-0">
            <v-col class="my-0 py-0">
              <v-textarea
                v-model="issue"
                label="issue"
                rows="1"
                class="my-0 py-0"
                auto-grow
                clearable
                dense
                single-line
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="my-1 py-0">
            <v-col class="my-0 py-0">
              <v-textarea
                v-model="ts"
                label="troubleshooting"
                rows="1"
                class="my-0 py-0"
                auto-grow
                clearable
                dense
                single-line
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="my-1 py-0">
            <v-col class="my-0 py-0">
              <v-textarea
                v-model="resolution"
                label="resolution"
                rows="1"
                class="my-0 py-0"
                auto-grow
                clearable
                dense
                single-line
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="my-1 py-0">
            <v-col class="my-0 py-0">
              <v-switch
                v-model="referral"
                inset
                :label="`refferal: ${referral.toString()}`"
                color="success"
                class="my-0 py-0"
                dense
                height="5px"
              ></v-switch>
            </v-col>
          </v-row>
          <v-row class="text-center mt-1 mb-0 py-0">
            <v-col class="my-0 py-0">
              <v-btn small color="success" class="my-0 py-0" height="25px">
                <v-icon dense>mdi-clipboard-text-outline</v-icon>
              </v-btn>
            </v-col>
            <v-col class="my-0 py-0">
              <v-btn small color="error" class="my-0 py-0" height="25px">
                <v-icon dense>mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-col>
            <v-col class="my-0 py-0">
              <v-btn small color="info" class="my-0 py-0" height="25px">
                <v-icon dense>mdi-restore</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Notepad",
  data() {
    return {
      name: "",
      verified: false,
      issue: "",
      ts: "",
      resolution: "",
      referral: false
    };
  }
};
</script>

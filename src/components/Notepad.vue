<template>
  <div class="notepad">
    <v-card class="my-2 py-3">
      <v-form class="my-0 py-0">
        <v-container class="my-0 py-0">
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0">
              <v-text-field
                v-model="name"
                label="name"
                clearable
                class="my-1 py-1"
                dense
                height="20px"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0">
              <v-switch
                v-model="verified"
                inset
                :label="`verified: ${verified.toString()}`"
                color="green accent-3"
                class="mt-0 mb-1 pa-0"
                dense
                height="10px"
              ></v-switch>
            </v-col>
          </v-row>
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0">
              <v-text-field
                v-model="issue"
                label="issue"
                clearable
                class="my-0 py-0"
                height="20px"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0">
              <v-textarea
                v-model="ts"
                label="troubleshooting"
                rows="1"
                class="my-0 py-0"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0">
              <v-text-field
                v-model="resolution"
                label="resolution"
                clearable
                class="my-0 py-0"
                height="20px"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-0 py-0">
            <v-col class="my-0 py-0">
              <v-switch
                v-model="referral"
                inset
                :label="`refferal: ${referral.toString()}`"
                color="green accent-3"
                class="mt-0 mb-1 pa-0"
                dense
                height="10px"
              ></v-switch>
            </v-col>
          </v-row>
          <v-row class="text-center my-0 py-0">
            <v-col class="my-0 py-0">
              <v-btn
                small
                color="green accent-3"
                class="my-0 py-0"
                height="25px"
              >
                <v-icon dense>mdi-clipboard-text-outline</v-icon>
              </v-btn>
            </v-col>
            <v-col class="my-0 py-0">
              <v-btn small color="red accent-3" class="my-0 py-0" height="25px">
                <v-icon dense>mdi-trash-can-outline</v-icon>
              </v-btn>
            </v-col>
            <v-col class="my-0 py-0">
              <v-btn
                small
                color="cyan accent-2"
                class="my-0 py-0"
                height="25px"
              >
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

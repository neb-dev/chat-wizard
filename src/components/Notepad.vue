<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="name" label="name" clearable></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="verified"
              inset
              :label="`verified: ${verified.toString()}`"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="issue"
              label="issue"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              v-model="ts"
              label="troubleshooting"
              rows="2"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="resolution"
              label="resolution"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="referral"
              inset
              :label="`refferal: ${referral.toString()}`"
            ></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
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

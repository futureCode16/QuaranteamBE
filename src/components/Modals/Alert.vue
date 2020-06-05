<template>
  <div>
    <v-dialog v-model="showAlert" max-width="400">
      <v-alert prominent type="error">
        <v-row align="center">
          <v-col class="grow">Invalid input of fields! Please try again.</v-col>
        </v-row>
      </v-alert>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlert: false
    };
  },
  mounted() {
    this.$bus.$on("empty-fields", invalid => {
      setTimeout(() => {
        this.showAlert = invalid;
      }, 700);
    });
  }
};
</script>


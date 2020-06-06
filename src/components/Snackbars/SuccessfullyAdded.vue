<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" color="success" :timeout="timeout">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    text: "Successfully added.",
    timeout: 3000
  }),
  mounted() {
    this.$bus.$on("Successfully-added", done => {
      this.snackbar = done.show;
      this.text = `${done.task} is ${this.text}`;
    });
  }
};
</script>
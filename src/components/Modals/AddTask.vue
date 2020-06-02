<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card max-width="350px">
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Add Task</v-toolbar-title>
        </v-toolbar>
        <br>
        <v-card-text>
          <v-form ref="task-form">
            <v-text-field label="Name of task" :prepend-icon="'mdi-sword'"/>
            <v-select
              :items="noOfStudents"
              menu-props="auto"
              label="Number of students"
              hide-details
              :prepend-icon="'mdi-pound-box'"
              single-line
            ></v-select><br>
            <v-select
              :items="difficulty"
              menu-props="auto"
              label="Difficulty"
              hide-details
              :prepend-icon="'mdi-gavel'"
              single-line
            ></v-select><br>
            <v-select
              :items="center"
              menu-props="auto"
              label="Location"
              hide-details
              :prepend-icon="'mdi-map-marker-radius'"
              single-line
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false">Cancel</v-btn>
          <v-btn color="success" @click="dialog = false">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      noOfStudents: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ],
      difficulty: ["Light", "Hard"],
      center: ["Center 1", "Center 2"]
    };
  },
  mounted() {
    this.$bus.$on("show-task-form", show => {
      this.dialog = show;
    });
  }
};
</script>
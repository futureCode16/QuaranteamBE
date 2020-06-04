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
            <v-text-field label="Name of task" :prepend-icon="'mdi-sword'" v-model="name_task"/>
            <v-select
              :items="noOfStudents"
              menu-props="auto"
              label="Number of students"
              hide-details
              :prepend-icon="'mdi-pound-box'"
              single-line
              v-model="no_student"
            ></v-select>
            <br>
            <v-select
              :items="difficulty"
              menu-props="auto"
              label="Difficulty"
              hide-details
              :prepend-icon="'mdi-gavel'"
              single-line
              v-model="task_difficulty"
            ></v-select>
            <br>
            <v-select
              :items="center"
              menu-props="auto"
              label="Location"
              hide-details
              :prepend-icon="'mdi-map-marker-radius'"
              single-line
              v-model="location"
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false">Cancel</v-btn>
          <v-btn color="success" @click="AddTask">Done</v-btn>
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
      name_task: "",
      no_student: "",
      task_difficulty: "",
      location: "",
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
  },
  methods: {
    AddTask() {
      var new_Task = {
        sTasks: this.name_task,
        NoOfStudents: parseInt(this.no_student),
        Center: this.location,
        Difficulty: this.task_difficulty
      };
      this.$store
        .dispatch("AddTask", new_Task)
        .then(res => {
          console.log(res, " res")
          this.$store.commit("addTask", res);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(new_Task);
    }
  }
};
</script>
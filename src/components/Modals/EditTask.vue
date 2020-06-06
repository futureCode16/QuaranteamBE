<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="isEditTask" persistent max-width="290">
        <v-card max-width="350px">
          <v-toolbar color="orange" dark flat>
            <v-toolbar-title>Edit Task</v-toolbar-title>
          </v-toolbar>
          <br>
          <v-card-text>
            <v-form ref="task-form">
              <v-text-field
                label="Name of task"
                :prepend-icon="'mdi-sword'"
                v-model="task_edit.task_name"
              />
              <v-select
                :items="items"
                label="Select Coordinator"
                :prepend-icon="'mdi-crown'"
                single-line
              ></v-select>
              <v-select
                v-model="value"
                :items="Member"
                label="Select Members"
                multiple
                :prepend-icon="'mdi-account-multiple'"
              >
                <template v-slot:selection="{ item, index }">
                  <v-chip v-if="index === 0">
                    <span>{{ item }}</span>
                  </v-chip>
                  <span
                    v-if="index === 1"
                    class="grey--text caption"
                  >(+{{ Member.length - 1 }} others)</span>
                </template>
              </v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="isEditTask = false">Cancel</v-btn>
            <v-btn color="success" @click="isEditTask = false">Done</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "EditTask",
  data() {
    return {
      isEditTask: false,
      task_edit: {},
      selected_coordinator: "",
      items: []
    };
  },
  computed: {
    Member() {
      return this.task_edit.task_members;
    }
  },
  mounted() {
    this.$bus.$on("edit-task", data => {
      console.log(data.data);
      this.task_edit = {
        task_name: data.data.tasking,
        task_coordinator: data.data.coordinator,
        task_members: data.data.members
      };
      this.items = data.data.members;
      console.log(this.items, " items");
      setTimeout(() => {
        this.isEditTask = data.show;
      }, 500);
      console.log(this.task_edit);
    });
  }
};
</script>
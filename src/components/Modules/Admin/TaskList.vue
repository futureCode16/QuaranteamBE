<template>
  <div style="padding : 1%; margin-top: 3%;">
    <v-data-table :headers="headers" :items="CenterTasks" sort-by="location" class="elevation-3">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>PN Center Tasks</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)" color="warning">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)" color="error">mdi-delete</v-icon>
      </template>
    </v-data-table>
    <AddTask/>
  </div>
</template>

<script>
import AddTask from "@/components/Modals/AddTask.vue";

export default {
  name: "TaskList",
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "Task name",
        align: "start",
        sortable: false,
        value: "sTasks"
      },
      { text: "No. of Students", value: "NoOfStudents", sortable: false },
      { text: "Difficulty", value: "Difficulty", sortable: false },
      { text: "Location", value: "Center" },
      { text: "Actions", value: "actions", sortable: false }
    ]
  }),
  components: {
    AddTask
  },
  computed: {
    CenterTasks() {
      return this.$store.state.centerTasks;
    }
  },
  methods: {}
};
</script>
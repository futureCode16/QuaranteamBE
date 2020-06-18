<template>
  <div style="padding : 1%; margin-top: 3%;">
    <v-card>
      <v-card-title>
        <v-toolbar flat color="white">
          <v-toolbar-title v-text="tableText"></v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search student"
          single-line
          solo
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="profiles"
        sort-by="location"
        class="elevation-3"
        :search="search"
      >
        <template v-slot:item.sex="{ item }">
          <v-chip :color="getColor(item.sex)" dark>{{ item.sex }}</v-chip>
        </template>
        <template v-slot:item.class_number="{ item }">
          <v-chip color="success">{{ item.class_number }}</v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon class="mr-2" color="indigo" @click="viewProfile(item)">mdi-eye</v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped>
.v-text-field {
  width: 10px;
}
</style>

<script>
export default {
  name: "TaskList",
  props: {
    profile: {
      type: Array
    }
  },
  data: () => ({
    search: "",
    tableText: "test",
    dialog: false,
    headers: [
      {
        text: "Class number",
        align: "center",
        value: "class_number"
      },
      {
        text: "Last name",
        value: "lastname",
        sortable: false
      },
      { text: "First name", value: "firstname", sortable: false },
      { text: "Middle name", value: "middlename", sortable: false },
      { text: "Age", value: "age", sortable: false },
      { text: "Sex", value: "sex", sortable: false, align: "center" },
      { text: "Address", value: "address", sortable: false },
      { text: "Actions", value: "actions", sortable: false, align: "center" }
    ]
  }),
  computed: {
    profiles() {
      return this.profile;
    }
  },
  mounted() {
    if (this.$route.name == "1styrstudents") {
      this.tableText = "Batch 2022";
    } else if (this.$route.name == "2ndyrstudents") {
      this.tableText = "Batch 2021";
    } else if (this.$route.name == "3rdyrstudents") {
      this.tableText = "Batch 2020";
    }
  },
  methods: {
    getColor(sex) {
      if (sex == "Male") return "blue";
      else if (sex == "Female") return "orange";
    },
    viewProfile(item) {
      this.$bus.$emit("show-profile", item);
    }
  }
};
</script>
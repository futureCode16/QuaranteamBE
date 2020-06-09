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
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="profiles"
        sort-by="location"
        class="elevation-3"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

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
        text: "Last name",
        align: "start",
        value: "lastname"
      },
      { text: "First name", value: "firstname", sortable: false },
      { text: "Age", value: "age", sortable: false },
      { text: "Sex", value: "sex", sortable: false },
      { text: "Address", value: "address", sortable: false }
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
  }
};
</script>
<template>
  <div style="padding : 1%; margin-top: 3%;">
    <v-data-table :headers="headers" :items="profiles" sort-by="location" class="elevation-3">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>PN First Year Students</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
    </v-data-table>
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
  }
};
</script>
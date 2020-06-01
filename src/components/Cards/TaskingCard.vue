<template>
  <v-card class="mx-auto" height="200" elevation="5">
    <v-card-title>{{TaskDetails.tasking}}</v-card-title>
    <v-card-subtitle>Coordinator: {{TaskDetails.coordinator}}</v-card-subtitle>
    <v-card-text v-for="(member, i) in TaskDetails.members" v-bind:key="i"></v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TaskingCard",
  props: {
    TaskDetails: {
      type: Object
    }
  }
};
</script>


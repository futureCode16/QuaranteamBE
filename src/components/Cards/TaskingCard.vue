<template>
  <v-card class="mx-auto" elevation="5">
    <v-card-title>
      {{TaskDetails.tasking}}
      <v-spacer/>
      <v-btn fab small text color="warning">
        <v-icon small>mdi-pencil</v-icon>
      </v-btn>
      <v-divider vertical></v-divider>
      <v-btn fab small text color="error">
        <v-icon small>mdi-delete</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle style="color: #0099ff; font-weight: bold;">
      <v-icon>mdi-crown</v-icon>
      {{TaskDetails.coordinator}}
    </v-card-subtitle>
    <v-list disabled>
      <v-subheader>
        Members
        <v-icon>mdi-account-multiple</v-icon>:
      </v-subheader>
      <v-list-item v-for="(member, i) in TaskDetails.members" v-bind:key="i">
        <v-list-item-content>
          <v-list-item-title>{{`${i+1}.) ` + member}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
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


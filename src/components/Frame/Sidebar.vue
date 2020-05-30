<template>
  <v-navigation-drawer v-model="drawer" elevation="5" permanent absolute>
    <br>
    <br>
    <br>
    <v-spacer/>
    <v-col>
      <v-avatar size="225">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
      </v-avatar>
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-list-item-title class="title">Miguel Martinez</v-list-item-title>
          <v-list-item-subtitle>Education Manager</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
    <v-divider></v-divider>
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="item in items"
        :key="item.title"
        active-class="blue darken-2 white--text text--accent-4"
      >
        <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn text color="white">Create Tasking</v-btn>
          <v-btn text color="white">View Tasking</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <v-list nav dense>
      <v-divider></v-divider>
      <v-list-item
        active-class="blue darken-2 white--text text--accent-4"
        v-for="item in items"
        :key="item.title"
        :to="item.link"
        @click.stop="drawer = !drawer"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>-->
  </v-navigation-drawer>
</template>

<style scoped>
</style>


<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Student Tasking",
          icon: "mdi-food",
          link: "/dashboard"
        },
        {
          title: "Student Concerns  ",
          icon: "mdi-dropbox",
          link: "/orders"
        },
        {
          title: "Student Body Officer",
          icon: "mdi-share",
          link: "/facts"
        },
        {
          title: "PN Rules ",
          icon: "mdi-share",
          link: "/test"
        }
      ],
      drawer: false
    };
  }
};
</script>
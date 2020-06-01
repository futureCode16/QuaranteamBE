<template>
  <v-navigation-drawer elevation="5" permanent app style="border-right: 2px solid #0099ff">
    <br>
    <!-- <br>
    <br>-->
    <v-spacer/>
    <v-col>
      <v-avatar size="225">
        <img :src="require('@/assets/admin-icon.png')" alt="Admin">
      </v-avatar>
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-list-item-title class="title">Miguel Martinez</v-list-item-title>
          <v-list-item-subtitle>Education Manager</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-col>
    <v-divider></v-divider>
    <v-expansion-panels focusable inset hover>
      <v-expansion-panel
        v-for="(nav,i) in navigations"
        :key="i"
        active-class="orange darken-1 white--text text--accent-4"
      >
        <v-expansion-panel-header>{{nav.title}}</v-expansion-panel-header>
        <v-expansion-panel-content
          v-for="method in nav.methods"
          v-bind:key="method.task"
          style="margin-top:-5%;"
        >
          <br>
          <v-btn text small>
            <v-icon>{{ method.icon }}</v-icon>
            {{method.task}}
          </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<style scoped>
</style>


<script>
export default {
  name: "Sidebar",
  data() {
    return {
      navigations: [
        {
          title: "Students",
          methods: [
            {
              icon: "mdi-account",
              task: "1st year Students"
            },
            {
              icon: "mdi-account",
              task: "2nd year Students"
            },
            {
              icon: "mdi-account",
              task: "3rd year Students"
            }
          ],
          link: "/dashboard"
        },
        {
          title: "Student Tasking",
          methods: [
            {
              icon: "mdi-eye",
              task: "View tasking"
            }
          ],
          link: "/dashboard"
        },
        {
          title: "Student Concerns  ",
          methods: [
            {
              icon: "mdi-comment-text-outline",
              task: "Concerns"
            }
          ],
          link: "/orders"
        },
        {
          title: "Student Body Officer",
          methods: [
            {
              icon: "mdi-account",
              task: "PN-SBO"
            },
            {
              icon: "mdi-account-star",
              task: "Election"
            }
          ],
          link: "/facts"
        },
        {
          title: "PN Rules ",
          methods: [
            {
              icon: "mdi-lightbulb-outline",
              task: "Rules"
            }
          ],
          link: "/test"
        }
      ]
    };
  }
};
</script>
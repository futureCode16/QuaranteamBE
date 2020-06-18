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
    <v-list>
      <v-expansion-panels focusable inset hover>
        <v-expansion-panel
          v-for="(nav,i) in navigations"
          :key="i"
          active-class="orange darken-1 white--text text--accent-4"
        >
          <v-expansion-panel-header disable-icon-rotate>
            {{nav.title}}
            <template v-slot:actions>
              <v-icon color="#0099ff">{{nav.headericon}}</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content
            v-for="method in nav.methods"
            v-bind:key="method.task"
            style="margin-top:-3%;"
          >
            <br>
            <router-link :to="`${method.link}`" style="text-decoration: none">
              <v-btn text small>
                <v-icon>{{ method.icon }}</v-icon>
                {{method.task}}
              </v-btn>
            </router-link>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-list>
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
              icon: "mdi-account-circle",
              task: "Batch 2022",
              link: "/1styrstudents"
            },
            {
              icon: "mdi-account-circle",
              task: "Batch 2021",
              link: "/2ndyrstudents"
            },
            {
              icon: "mdi-account-circle",
              task: "Batch 2020",
              link: "/3rdyrstudents"
            }
          ],
          headericon: "mdi-account-multiple-outline"
        },
        {
          title: "Student Tasking",
          methods: [
            {
              icon: "mdi-home-modern",
              task: "Center 1",
              link: "/center1tasks"
            },
            {
              icon: "mdi-home-variant",
              task: "Center 2",
              link: "/center2tasks"
            },
            {
              icon: "mdi-clipboard-text",
              task: "Center Tasking",
              link: "/centertasks"
            }
          ],
          headericon: "mdi-flag-variant-outline"
        },
        {
          title: "Student Concerns  ",
          methods: [
            {
              icon: "mdi-comment-text-outline",
              task: "Concerns",
              link: "/studentconcerns"
            }
          ],
          headericon: "mdi-telegram"
        },
        {
          title: "Student Body Officer",
          methods: [
            {
              icon: "mdi-account",
              task: "PN-SBO",
              link: "/pnsbo"
            },
            {
              icon: "mdi-account-star",
              task: "Election",
              link: "/sboelection"
            }
          ],
          headericon: "mdi-account-box-outline"
        },
        {
          title: "PN Rules ",
          methods: [
            {
              icon: "mdi-lightbulb-outline",
              task: "Rules",
              link: "/pnrules"
            }
          ],
          headericon: "mdi-star-outline"
        }
      ]
    };
  }
};
</script>
<template>
  <v-app-bar app color="orange" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('@/assets/pn-logo.png')"
        transition="scale-transition"
        width="40"
      />
      <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
      />-->
    </div>
    <v-spacer></v-spacer>

    <v-sheet class="mx-auto" max-width="500" v-show="$route.name == 'center1tasks' || $route.name == 'center2tasks'">
      <v-slide-group center-active show-arrows>
        <v-slide-item v-for="n in 12" :key="n" v-slot:default="{ active, toggle }">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="primary white--text"
            depressed
            @click="toggle"
          >Week {{ n }}</v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <!-- <div
      class="text-center"
      v-show="$route.name == 'center1tasks' || $route.name == 'center2tasks'"
    >
      <v-pagination v-model="page" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
    </div>-->
    <v-spacer></v-spacer>

    <!-- <v-btn text v-show="$route.name == 'centertasks'" @click="showTaskForm">
      <span class="mr-2">Add Tasking</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>-->
  </v-app-bar>
</template>


<script>
export default {
  data() {
    return {
      page: 1,
      model: null,
    };
  }
};
</script>
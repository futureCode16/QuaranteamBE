<template>
  <div style="margin-top: 3%; padding: 1%;">
    <h1 class="text-center">First Year Students</h1>
    <v-lazy
      v-model="isActive"
      :options="{
          threshold: .5
        }"
      min-height="300"
      transition="fade-transition"
    >
      <v-item-group multiple v-if="!isTableView">
        <v-container>
          <v-row>
            <v-col v-for="img in Imgs" :key="img.name" cols="12" md="4">
              <v-item>
                <v-card class="d-flex align-center" dark height="300px" @click="showProfile(img)">
                  <v-img
                    class="white--text align-end"
                    :src="img.img"
                    height="300px"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  >
                    <v-card-title>{{img.lastname + " " + img.firstname}}</v-card-title>
                  </v-img>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <TableView :profile="Imgs" v-else/>
    </v-lazy>
    <StudentProfile/>
    <Buttons/>
  </div>
</template>


<script>
import Buttons from "@/components/Buttons/FabSpeedDial.vue";
import FirstYr from "./Student1";
import StudentProfile from "@/components/Modals/StudentProfile.vue";
import TableView from "./TableView.vue";

export default {
  data() {
    return {
      isActive: false,
      isTableView: false
    };
  },
  components: {
    Buttons,
    StudentProfile,
    TableView
  },
  computed: {
    Imgs() {
      return FirstYr.images_1st;
    }
  },
  mounted() {
    this.$bus.$on("table-view", show => {
      setTimeout(() => {
        this.isTableView = show;
      }, 1500);
    });
    this.$bus.$on("account-view", show => {
      setTimeout(() => {
        this.isTableView = !show;
      }, 1500);
    });
  },
  methods: {
    showProfile(data) {
      this.$bus.$emit("show-profile", data);
    }
  }
};
</script>

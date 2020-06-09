<template>
  <div id="buttons">
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-chevron-down</v-icon>
          <v-icon v-else>mdi-chevron-up</v-icon>
        </v-btn>
      </template>
      <v-tooltip left v-if="$route.name == 'center1tasks' || $route.name == 'center2tasks' ">
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="green" @click="EditTask" v-model="edit" v-on="on">
            <v-icon v-if="!edit">mdi-pencil</v-icon>
            <v-icon v-else>mdi-close</v-icon>
          </v-btn>
        </template>
        <span>{{ !edit ? editTooltip : "Cancel Edit"}}</span>
      </v-tooltip>
      <v-tooltip left v-if="$route.name == 'center1tasks' || $route.name == 'center2tasks' ">
        <template v-slot:activator="{ on}">
          <v-btn fab dark small color="red" @click="DeleteTask" v-model="deletebtn" v-on="on">
            <v-icon v-if="!deletebtn">mdi-delete</v-icon>
            <v-icon v-else>mdi-close</v-icon>
          </v-btn>
        </template>
        <span>{{ !deletebtn ? deleteTooltip : "Cancel Delete"}}</span>
      </v-tooltip>
      <v-tooltip left v-if="$route.name == 'center1tasks' || $route.name == 'center2tasks' ">
        <template v-slot:activator="{ on}">
          <v-btn fab dark small color="orange" v-on="on" @click="GenerateNewTask">
            <v-icon>mdi-shuffle</v-icon>
          </v-btn>
        </template>
        <span>Generate new task</span>
      </v-tooltip>
      <v-tooltip
        left
        v-if="$route.name == '1styrstudents' || $route.name == '2ndyrstudents' || $route.name == '3rdyrstudents'"
      >
        <template v-slot:activator="{ on}">
          <v-btn fab color="success" small v-on="on" @click="TableView" v-model="changeView">
            <v-icon v-if="!changeView">mdi-table-large</v-icon>
            <v-icon v-else>mdi-account-multiple</v-icon>
          </v-btn>
        </template>
        <span v-if="!changeView">Table view</span>
        <span v-else>List view</span>
      </v-tooltip>
      <v-tooltip
        left
        v-if="$route.name == '1styrstudents' || $route.name == '2ndyrstudents' || $route.name == '3rdyrstudents'"
      >
        <template v-slot:activator="{ on}">
          <v-btn
            fab
            color="orange"
            small
            v-on="on"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
        </template>
        <span>Go Up</span>
      </v-tooltip>
      <v-tooltip left>
        <template v-slot:activator="{ on}">
          <v-btn fab dark small v-on="on">
            <v-icon>mdi-printer</v-icon>
          </v-btn>
        </template>
        <span>Print tasking</span>
      </v-tooltip>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  data: () => ({
    direction: "top",
    editTooltip: "Edit Task",
    deleteTooltip: "Delete Task",
    deletebtn: false,
    edit: false,
    changeView: false,
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
    enabled: true
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  },
  methods: {
    DeleteTask() {
      if (this.deletebtn == false) {
        this.$bus.$emit("clicked-delete-btn", true);
        this.deletebtn = true;
      } else {
        this.$bus.$emit("clicked-delete-btn", false);
        this.deletebtn = false;
      }
    },
    EditTask() {
      if (this.edit == false) {
        this.$bus.$emit("clicked-edit-btn", true);
        this.edit = true;
      } else {
        this.$bus.$emit("clicked-edit-btn", false);
        this.edit = false;
      }
    },
    GenerateNewTask() {
      this.$bus.$emit("shuffle", true);
    },
    TableView() {
      if (this.changeView == false) {
        this.$bus.$emit("table-view", true);
        this.changeView = true;
      } else {
        this.$bus.$emit("account-view", true);
        this.changeView = false;
      }
    }
  }
};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#buttons .v-speed-dial {
  position: fixed;
  /* position: absolute; */
}

#buttons .v-btn--floating {
  position: relative;
}
</style>
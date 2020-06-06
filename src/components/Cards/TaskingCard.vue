<template>
  <div>
    <v-card class="mx-auto" elevation="5">
      <v-card-title>
        {{TaskDetails.tasking}}
        <v-spacer/>
        <v-btn
          fab
          small
          color="warning"
          v-show="showEditButton"
          class="mx-1"
          id="button"
          @click="EditTasking(TaskDetails)"
        >
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
        <!-- <v-divider vertical v-show="showDivider"></v-divider> -->
        <v-btn fab small color="error" v-show="showDeleteButton" id="button">
          <v-icon small>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle style="color: #0099ff; font-weight: bold;">
        <v-icon>mdi-crown</v-icon>
        {{TaskDetails.coordinator}}
      </v-card-subtitle>
      <v-list disabled v-if="TaskDetails.members != null">
        <v-subheader>
          Member/s
          <v-icon>mdi-account-multiple</v-icon>:
        </v-subheader>
        <v-list-item v-for="(member, i) in TaskDetails.members" v-bind:key="i">
          <v-list-item-content>
            <v-list-item-title>{{`${i+1}.) ` + member}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
  
<script>
export default {
  name: "TaskingCard",
  props: {
    TaskDetails: {
      type: Object
    }
  },
  data() {
    return {
      showEditButton: false,
      showDeleteButton: false
    };
  },
  mounted() {
    this.$bus.$on("clicked-delete-btn", isClicked => {
      setTimeout(() => {
        this.showDeleteButton = isClicked;
      }, 500);
    });
    this.$bus.$on("clicked-edit-btn", isClicked => {
      setTimeout(() => {
        this.showEditButton = isClicked;
      }, 500);
    });
  },
  methods: {
    EditTasking(data) {
      this.$bus.$emit("edit-task", { data: data, show: true });
    }
  }
};
</script>

<style>
#button:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>


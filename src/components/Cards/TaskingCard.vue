<template>
  <!-- <div>
    <h2>Draggable Wrapper</h2>
    <draggable v-model="exampleList">
      <div v-for="text in exampleList" :key="text">{{text}}</div>
    </draggable>
  </div>-->
  <div>
    <v-card class="mx-auto" elevation="5" :id="id" @dragover.prevent @drop.prevent="drop">
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
        <v-btn fab small color="error" v-show="showDeleteButton" id="button">
          <v-icon small>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle style="color: #0099ff; font-weight: bold;">
        <v-icon>mdi-crown</v-icon>
        {{TaskDetails.coordinator}}
      </v-card-subtitle>
      <v-subheader>
        Member/s
        <v-icon>mdi-account-multiple</v-icon>:
      </v-subheader>
      <v-card-text>
        <draggable >
          <div
            style="padding: 2%; "
            v-for="(member,i) in TaskDetails.members"
            v-bind:key="i"
            :id="i"
            draggable="true"
            @dragstart="dragStart"
            @dragover.stop
            class="chip"
          >
            {{`${i+1}.)`}}
            <!-- <v-avatar size="35">
              <v-img class="white--text align-end" :src="require('@/assets/2.jpg')"></v-img>
            </v-avatar> -->
            {{ `${member}`}}
          </div>

        </draggable>
      </v-card-text>
      <!-- <v-list disabled v-if="TaskDetails.members != null">
        <v-subheader>
          Member/s
          <v-icon>mdi-account-multiple</v-icon>:
        </v-subheader>

        <v-list-item v-for="(member, i) in TaskDetails.members" v-bind:key="i">
          <v-list-item-content>
            <v-list-item-title>{{`${i+1}.) ` + member}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>-->
    </v-card>
  </div>
</template>
  
<script>
import draggable from "vuedraggable";
export default {
  name: "TaskingCard",
  props: {
    TaskDetails: {
      type: Object
    },
    id: {
      type: Number
    }
  },
  data() {
    return {
      showEditButton: false,
      showDeleteButton: false,
      exampleList: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
    };
  },
  components: {
    draggable
  },
  mounted() {
    console.log(this.TaskDetails, " task details" )
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
    },
    drop: e => {
      console.log(e.dataTransfer.getData("student_id"), " student ID");
      const student_id = e.dataTransfer.getData("student_id");
      const student = document.getElementById(student_id);

      console.log(student, "this is the element");

      console.log(e.target, " e target");

      // card.style.display = "block";
      // var test = document.createElement("DIV");
      // test.appendChild(student);

      // console.log(test, " test element");
      e.target.appendChild(student);
    },
    dragStart: e => {
      const target_student = e.target;

      e.dataTransfer.setData("student_id", target_student.id);

      // setTimeout(() => {
      //   target.style.display = "none";
      // }, e);

      console.log(target_student, " target");
    }
  }
};
</script>

<style scoped>
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


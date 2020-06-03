<template>
  <div>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="task in tasks" :key="task.tasking" cols="12" md="4">
            <v-item>
              <v-skeleton-loader
                :loading="loading"
                :transition="transition"
                height="200"
                type="card"
              >
                <TaskingCard :TaskDetails="task" v-show="!loading"></TaskingCard>
              </v-skeleton-loader>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center" style="padding: 2%;">
        <v-pagination
          v-model="page"
          :length="4"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          v-show="!loading"
        ></v-pagination>
      </div>
    </v-item-group>
    <AddTask/>
    <Buttons/>
  </div>
</template>

<script>
import TaskingCard from "@/components/Cards/TaskingCard.vue";
import AddTask from "@/components/Modals/AddTask.vue";
import Buttons from "@/components/Buttons/FabSpeedDial.vue";

export default {
  name: "studenttasking",
  data() {
    return {
      page: 3,
      loading: false
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  components: {
    TaskingCard,
    AddTask,
    Buttons
  },
  mounted() {
    this.$bus.$on("shuffle", isShuffle => {
      this.loading = isShuffle;
      setTimeout(() => {
        this.loading = !isShuffle;
      }, 2000);
    });
  },
  methods: {}
};
</script>


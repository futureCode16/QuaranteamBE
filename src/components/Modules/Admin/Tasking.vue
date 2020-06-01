<template>
  <div app>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="task in tasks" :key="task.tasking" cols="12" md="4">
            <v-item>
              <TaskingCard :TaskDetails="task"></TaskingCard>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import TaskingCard from "@/components/Cards/TaskingCard.vue";

export default {
  name: "studenttasking",
  data() {
    return {
      tasks: [
        {
          tasking: "Dishwashing",
          coordinator: "Rangie Laurente",
          members: [
            "Renan Bargaso",
            "Renzy Verano",
            "Jan Patrick Tancinco",
            "John Louie Bersaluna"
          ]
        },
        {
          tasking: "Kitchen",
          coordinator: "James Laurente",
          members: [
            "Renan Bargaso",
            "Renzy Verano",
            "Jan Patrick Tancinco",
            "John Louie Bersaluna"
          ]
        },
        {
          tasking: "Dining",
          coordinator: "John Laurente",
          members: [
            "Renan Bargaso",
            "Renzy Verano",
            "Jan Patrick Tancinco",
            "John Louie Bersaluna"
          ]
        },
        {
          tasking: "Back Garden",
          coordinator: "Jay Laurente",
          members: [
            "Renan Bargaso",
            "Renzy Verano",
            "Jan Patrick Tancinco",
            "John Louie Bersaluna"
          ]
        },
        {
          tasking: "Front Garden",
          coordinator: "Jay Laurente",
          members: [
            "Renan Bargaso",
            "Renzy Verano",
            "Jan Patrick Tancinco",
            "John Louie Bersaluna"
          ]
        },
        {
          tasking: "Courtyard",
          coordinator: "Jay Laurente",
          members: [
            "Renan Bargaso",
            "Renzy Verano",
            "Jan Patrick Tancinco",
            "John Louie Bersaluna"
          ]
        },
        {
          tasking: "Hallway and Corridor",
          coordinator: "Jay Laurente",
          members: [
            "Renan Bargaso",
            "Renzy Verano",
            "Jan Patrick Tancinco",
            "John Louie Bersaluna"
          ]
        }
      ]
    };
  },
  components: {
    TaskingCard
  },
  methods: {}
};
</script>

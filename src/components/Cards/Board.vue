<template>
  <v-card :id="id" class="board" @dragover.prevent @drop.prevent="drop">
    <v-card-title>
      <slot/>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    drop: e => {
      const card_id = e.dataTransfer.getData("card_id");

      const card = document.getElementById(card_id);

      card.style.display = "block";

      e.target.appendChild(card);
      console.log(e, " e");
      console.log(card_id, " card id");
      console.log(card, " card");
    }
  }
};
</script>


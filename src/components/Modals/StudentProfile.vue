<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="350">
        <v-card class="mx-auto" max-width="350">
          <v-img class="white--text align-end" height="300px" :src="img"></v-img>
          <v-card-title class="pb-0">Student Information:</v-card-title>
          <v-card-text class="text--primary">
            <div>
              <strong>Lastname:</strong>
              {{ lastname}}
            </div>
            <div>
              <strong>Firstname:</strong>
              {{ firstname}}
            </div>
            <div>
              <strong>Address:</strong>
              {{ address}}
            </div>
            <div>
              <strong>Age:</strong>
              {{ age}}
            </div>
            <div>
              <strong>Sex:</strong>
              {{ sex}}
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      img: "",
      firstname: "",
      lastname: "",
      address: "",
      age: 0,
      sex: ""
    };
  },
  mounted() {
    this.$bus.$on("show-profile", data => {
      this.img = data.img;
      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.address = data.address;
      this.age = data.age;
      this.sex = data.sex;
      this.dialog = true;
    });
  }
};
</script>
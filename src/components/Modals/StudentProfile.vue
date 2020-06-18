<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600">
        <v-card class="mx-auto" max-width="600">
          <v-card-title class="pb-0">
            <v-avatar size="200">
              <v-img class="white--text align-end" :src="img"></v-img>
            </v-avatar>
            <div style="margin-left: 5%;">
              <h3
                style="font-size: 2.5vw; font-size: 20px;"
              >{{`44.) ${lastname}, ${firstname} ${middlename}`}}</h3>
            </div>
        
          </v-card-title>
          <br>
          <v-card-text class="text--primary">
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
            <div>
              <strong>Parent's contact number:</strong>
              {{ "Lady Gaga"}}
            </div>
            <div>
              <strong>Mother's maiden name:</strong>
              {{ "Lady Gaga"}}
            </div>
            <div>
              <strong>Mother's Occupation:</strong>
              {{ "Housewife"}}
            </div>
            <div>
              <strong>Father's name:</strong>
              {{ "James Harden"}}
            </div>
            <div>
              <strong>Father's Occupation:</strong>
              {{ "Taxi Driver"}}
            </div>
          </v-card-text>
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn fab small color="primary">
              <v-icon>mdi-printer</v-icon>
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "StudentProfile",
  data() {
    return {
      dialog: false,
      img: "",
      firstname: "",
      lastname: "",
      middlename: "",
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
      this.middlename = data.middlename;
      this.address = data.address;
      this.age = data.age;
      this.sex = data.sex;
      this.dialog = true;
    });
  }
};
</script>
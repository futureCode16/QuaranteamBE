<template>
  <div style="margin-top: 20%;">
      <p class="text-center">test</p>
    <!-- <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row
            :align="alignment"
            :justify="justify"
            class="grey lighten-5"
            style="height: 300px;"
          >
            <v-card
              height="300"
              width="250"
              v-for="n in user"
              :key="n.title"
              class="ma-3 pa-6"
              :color="n.color"
            >
              <v-row justify="center">
                <v-btn
                  color="orange lighten-2"
                  class="mt-12"
                  @click="overlay = !overlay"
                >{{n.title}}</v-btn>
                <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay">
                  <v-btn color="orange lighten-2" @click="overlay = false">Hide Overlay</v-btn>
                </v-overlay>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      absolute: true,
      opacity: 1,
      overlay: false,
      alignment: "center",
      dense: false,
      justify: "center",
      user: [
        {
          title: "Student",
          login: "Login",
          color: "orange",
        },
        {
          title: "Admin",
          login: "Login",
          register: "Register",
          color: "blue",
        }
      ]
    };
  }
};
</script>
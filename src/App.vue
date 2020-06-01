<template>
  <v-app>
    <Header/>
    <Sidebar/>
    <!-- <Cover/> -->
    <v-content>
      <Body/>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Header from "./components/Frame/Header.vue";
import Body from "./components/Frame/Body.vue";
import Sidebar from "./components/Frame/Sidebar.vue";
// import Cover from "./components/Frame/Cover.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    // Cover,
    Header,
    Body
  },

  data: () => ({
    //
  })
};
</script>

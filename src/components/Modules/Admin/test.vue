<template>
  <div>
    <p>{{test}}</p>
    <v-text-field v-model="TestDemo"></v-text-field>
    <v-btn @click="testEvent" >test click</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "renzy",
      demo: "Gwapo ako",
    };
  },
  computed: {
    TestDemo() {
      return this.demo.split('').reverse().join('');
    }
  },
  methods: {
    testEvent() {

      console.log(this.demo, " this is demo");
    }
  }
};
</script>

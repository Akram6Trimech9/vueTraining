const { createApp } = Vue;

createApp({
  data() {
    return {
      age: 10,
    };
  },
  methods: {
    checkRefs() {
      this.age = this.$refs.myInput.value;
    },
  },
}).mount("#app");

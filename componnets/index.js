const { createApp } = Vue;

const my_component = {
  template: "<h2>Hello from Component </h2>",
};

createApp({
  data() {
    return {};
  },
  methods: {},
  components: {
    my_component,
  },
}).mount("#app");

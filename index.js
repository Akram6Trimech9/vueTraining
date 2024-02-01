const { createApp, ref } = Vue;

createApp({
  data() {
    // const message = ref("Hello vue!");
    return {
      email: "",
      username: "",
      password: "",
      number: 0,

      // message,
      // name: "akram",
      // link: "https://google.com",
      name: "akram",
      city: "tunisia",
    };
  },
  methods: {
    // sayHi(time) {
    //   return "Hello world ! " + time;
    // },
    // sayTest: () => {
    //   return "Hey boys ";
    // },
    sum: function () {
      this.number++;
    },

    testme: () => {
      console.log("test once ");
    },
    printMyname() {
      console.log("akram");
    },
    //   testdbl: () => {
    //     alert("double click");
    //   },
    sendData: function () {
      const object = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      console.log(object);
    },
  },
}).mount("#app");

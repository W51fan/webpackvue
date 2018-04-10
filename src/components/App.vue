<template>
  <div id="app">
    <!-- <Home></Home> -->
    <Layouts></Layouts>
  </div>
</template>
<script>
import Home from "./Home.vue";
import Layouts from "./layouts.vue";
export default {
  components: {
    Home,
    Layouts
  },
  name: "App",
  beforeCreate() {
    console.log("%c======== beforeCreated ========", "color:red");
    console.log(this.$el);
    console.log(this.$data);
    console.log(this.message);
  },
};
</script>
<style>

<template>
    <div>
       <textarea id="editor" placeholder="Balabala" autofocus></textarea>
    </div>
</template>

<script>
import $ from 'jquery';
import Simditor from "simditor";
import 'simditor/styles/simditor.css';
export default {
  name: "editor",
  components: {},
  mounted: function() {
    var editor = new Simditor({
      textarea: $("#editor")
      //optional options
    });
  }
};
</script>

<style scoped>

</style>




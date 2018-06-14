<template>
    <div>
       <textarea id="editor" placeholder="" autofocus></textarea>
    </div>
</template>

<script>
import $ from "jquery";
import Simditor from "simditor";
import "simditor/styles/simditor.css";
export default {
  name: "editor",
  components: {},
  mounted: function() {
    toolbar = [
      "title",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "fontScale",
      "color",
      "|",
      "ol",
      "ul",
      "blockquote",
      "code",
      "table",
      "|",
      "link",
      "image",
      "hr",
      "|",
      "indent",
      "outdent",
      "alignment"
    ];
    var editor = new Simditor({
      textarea: $("#editor"),
      //textarea: elem[0],
      placeholder: "这里输入文字...",
      defaultImage: "./img/noImage.png",
      toolbar: toolbar,
      toolbarFloat: true,
      allowedAttributes: [],
      upload: false
    });
  }
};
</script>

<style scoped>

</style>




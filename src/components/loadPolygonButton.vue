
<template>
  <div id="loadpolygon">
    <span @click="loadpolygon()">加载多边形</span>
  </div>
</template>
<script>

export default {
  components: {
    
  },
  name: "loadpoint",
  methods:{
    loadpolygon(){
      this.$emit('loadPolygon');
    },
  }
};
</script>
<style scoped>
#loadpolygon{
    position: absolute;
    top: 90px;
    left: 440px;
    border: 1px solid #44a9b3;
    background-color: darkgray;
    height: 40px;
    line-height: 40px;
    width: 90px;
    border-radius: 10px;
}
</style>


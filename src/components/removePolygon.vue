
<template>
  <div id="removepolygon">
    <span @click="removePolygon()">移除多边形</span>
  </div>
</template>
<script>

export default {
  components: {
    
  },
  name: "removePolygon",
  methods:{
    removePolygon(){
      this.$emit('removePolygon');
    },
  }
};
</script>
<style scoped>
#removepolygon{
    position: absolute;
    top: 90px;
    left: 540px;
    border: 1px solid #44a9b3;
    background-color: darkgray;
    height: 40px;
    line-height: 40px;
    width: 90px;
    border-radius: 10px;
}
</style>


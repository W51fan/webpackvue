
<template>
  <div id="loadpoint">
    <span @click="loadpoint()">加载点</span>
  </div>
</template>
<script>

export default {
  components: {
    
  },
  name: "loadpoint",
  methods:{
    loadpoint(){
      this.$emit('loadingPoint');
    },
  }
};
</script>
<style scoped>
#loadpoint{
    position: absolute;
    top: 90px;
    left: 300px;
    border: 1px solid #44a9b3;
    background-color: darkgray;
    height: 40px;
    line-height: 40px;
    width: 60px;
    border-radius: 10px;
}
</style>


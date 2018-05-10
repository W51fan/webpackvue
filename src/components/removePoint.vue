
<template>
  <div id="removepoint">
    <span @click="removePoint()">移除点</span>
  </div>
</template>
<script>

export default {
  components: {
    
  },
  name: "removePoint",
  methods:{
    removePoint(){
      this.$emit('removePoint');
    },
  }
};
</script>
<style scoped>
#removepoint{
    position: absolute;
    top: 90px;
    left: 370px;
    border: 1px solid #44a9b3;
    background-color: darkgray;
    height: 40px;
    line-height: 40px;
    width: 60px;
    border-radius: 10px;
}
</style>


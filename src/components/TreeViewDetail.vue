<template>
    <div>
        <h3>
            欢迎光临！  
        </h3>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: "TreeViewDetail",
  data() {
    return {
      currentRoute: this.$route.path
    };
  },
  watch: {
    //监听路由，只要路由有变化(路径，参数等变化)都有执行下面的函数
    $route: {
      handler: function(val, oldVal) {
        this.currentRoute = val.name;
      },
      deep: true
    }
  }
};
</script>
<style scoped>
h3 {
  margin-top: 10px;
  font-weight: normal;
}
</style>

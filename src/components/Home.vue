<template>
  <div class="home">
        <Header></Header>
        <Leftbar></Leftbar>
        <Right></Right>
  </div>
</template>
<script>
import TreeView from "./TreeView.vue";
import Header from '../common/header.vue'
import Leftbar from '../common/left.vue';
import Right from '../common/right.vue';

export default {
  components: {
    TreeView,
    Header,
    Leftbar,
    Right
  },
  name: "Home"
};
</script>
<style scoped>
.side-bar {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 0;
}
.continer {
  padding-left: 320px;
}
</style>

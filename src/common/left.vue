<template>
	<div class="side-bar">
        <Tree-view></Tree-view>
    </div>
</template>
<script>
import TreeView from "../components/TreeView.vue";

export default {
  data(){
    return{
      
    }
  },
  components:{
	TreeView
  },
  methods:{
    
  }
}

</script>

<style lang="stylus" scoped>
	#left {
		float: left 
        width: 19% 
        height: 300px 
        background: aquamarine
	}
	
	.navwrapper {
		padding: 10px 
        text-align: center
	}
	
	.nav {
		margin: 10px 
        padding: 5px 
        background: #1030b04d;
		text-decoration: none
        display: block;
	}
	
	.router-link-active>span {
		background: antiquewhite 
        padding: 5px 
        margin: -5px
	}
    .nav.router-link-active  {
		background: antiquewhite 
	}

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
</style>

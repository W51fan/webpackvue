<template>
	<!-- <div id="right">
		<router-view></router-view>
	</div> -->
    <div>
            <router-view></router-view>
    </div>
</template>
<script>


export default {
  data(){
    return{
      
    }
  },
  components:{
 
  },
  methods:{
    
  }
}

</script>

<style lang="stylus" scoped>
	#right {
		float: right 
        width: 80% 
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
    .continer {
        padding-left: 320px;
    }
</style>

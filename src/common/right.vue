<template>
	<!-- <div id="right">
		<router-view></router-view>
	</div> -->
    <div class="continer">
            <router-view></router-view>
    </div>
</template>
<script>
import Page01 from '../components/page01.vue'
import Page02 from '../components/page02.vue'
import Page03 from '../components/page03.vue'
import Page04 from '../components/page04.vue'

export default {
  data(){
    return{
      
    }
  },
  components:{
   Page01,
   Page02,
   Page03,
   Page04,
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

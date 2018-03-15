<template>
	<div class="real-app">
    <div class="navwrapper">
        <router-link to="/Page01" class="nav"><span>高德地图</span></router-link>
        <router-link to="/Page02" class="nav"><span>百度地图</span></router-link>
        <router-link to="/Page03" class="nav"><span>谷歌地图</span></router-link>
        <router-link to="/Page04" class="nav"><span>必应地图</span></router-link>
    </div>
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
   Page04
  },
  methods:{
    
  }
}
</script>

<style lang="stylus" scoped>
	.real-app {
		width: 800px 
    margin: 10px auto 
    box-shadow: 0 0 5px #666
    padding: 10px
	}
  .navwrapper{
    padding: 10px
    text-align: left
  }
  .nav{
    
    margin:10px
    padding: 5px
    background: #1030b04d;
    text-decoration:none
  }
  .router-link-active>span {
    background: antiquewhite
    padding: 5px
    margin: -5px
  }
 
</style>

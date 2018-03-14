<template>
	<div class="real-app">
		<router-link to="/Page01">高德地图</router-link>
		<router-link to="/Page02">百度地图</router-link>
    <router-link to="/Page03">谷歌地图</router-link>
    <router-link to="/Page04">必应地图</router-link>
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
</style>

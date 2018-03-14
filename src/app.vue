<template>
	<div id="app">
		<Header></Header>
		<Nav></Nav>	
	</div>
</template>

<script>
import Header from './common/header.vue'
import Nav from './common/nav.vue'



export default{
	components:{
		Header,
		Nav
	}
}
</script>

<style lang="stylus" scoped>
	#app {
		position absolute 
		right 0 
		top 0 
		bottom 0
		width 90%
		position: absolute;
    	top: 32%;
    	left: 50%;
    	transform: translate(-50%, -50%);
	}	
</style>

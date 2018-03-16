<template>
	<div id="app">
		<layouts></layouts>	
	</div>
</template>

<script>
import layouts from './components/layouts.vue'



export default{
	components:{
		layouts
	}
}
</script>

<style lang="stylus" scoped>
	#app { 
		width 90%
		height 100%
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}	
</style>

<template>
	<div id="app">
		<div id="cover"></div>
		<HEADER></HEADER>
	</div>
</template>

<script>
import HEADER from './todo/header.vue'

export default{
	components:{
		HEADER,
	}	
}
</script>

<style lang="stylus" scoped>
#app{
	position absolute
	left 0
	right 0
	top 0
	bottom 0
}
#cover{
	position absolute
	left 0
	top 0
	right 0
	bottom 0
	background-color #999
	opacity .9
	z-index -1
}
</style>

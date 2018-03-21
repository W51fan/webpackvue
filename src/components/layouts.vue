<template>
	<div class="real-app">
		<Header></Header>
		<Left></Left>
		<Right></Right>
	</div>
</template>

<script>
    import Header from '../common/header.vue'
    import Left from '../common/left.vue';
    import Right from '../common/right.vue';

    export default{
        components:{
            Header,
            Left,
            Right,
        },
    }
</script>

<style lang="stylus" scoped>
.real-app {
    margin: 10px auto 
    box-shadow: 0 0 5px #666
	}
</style>

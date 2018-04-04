<template>
	<div>
        <span :class="color">target: {{ msg }}</span>
        <div>
            <input type="button" value="load" @click="loadingdata()" ></input>
        </div>
        <div>
            <input v-model="inputdata" placeholder="請輸入"></input>
        </div>
        <div>
            <span>{{inputdata}}</span>
        </div>
        
        <Mycheckbox v-model="fruit.peach" value="peach"></Mycheckbox>
        <Mycheckbox v-model="fruit.apple" value="apple"></Mycheckbox>

        <Singlebox v-model="package" value="peach" name="myFruit"></Singlebox>
        <Singlebox v-model="package" value="apple" name="myFruit"></Singlebox>
    </div>
</template>
<script>
import Mycheckbox from "./checkbox.vue";
import Singlebox from "./singlebox.vue";


    export default {
        name:"Page05",
        components: {
            Mycheckbox,
            Singlebox
        },
        data:function(){
            return {
                msg:"hreo",
                color:"color",
                inputdata:"",
                fruit: {//数据
                    apple: true,
                    peach: false
                },
                package: "peach"
            }
        },
        mounted: function () {},
        methods:{
            loadingdata(){
                let host = "http://"+location.host+'/';
                console.log(host);
                axios({
                    method:'get',
                    url:host+"src/jsons/test.json"
                }).then(res=>{
                    alert(res.data.text);
                }).catch(error =>{
                    alert(error);
                });
            },
        },	
    }
</script>
<style  scoped>
    .color{
     background: aquamarine
    }
</style>

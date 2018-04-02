<template>
    <div>
        <span>{{value}}</span>
        <input :name="name" type="radio" ref="radio" :checked="checked===value" @change="doThis" :value="value"/>
    </div>
</template>

<script>
export default {
    name:"Singlebox",
    data:function(){
        return{}
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: String,
        value: String,
        name: String
    },
    methods: {
        doThis() {
            this.$emit('change', this.$refs.radio.value);
        }
    }              
}
</script>

<style>

</style>

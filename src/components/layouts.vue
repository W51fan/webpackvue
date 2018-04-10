<template>
	<div>
		<el-container>
            <el-header>Vue demo</el-header>
            <el-container>
                <el-aside width="200px">
                    <navMenu></navMenu>
                </el-aside>
                <el-container>
                <el-main>
                     <Right></Right>
                </el-main>
                <!-- <el-footer>Footer</el-footer> -->
                </el-container>
            </el-container>
        </el-container>
	</div>
</template>

<script>
import Header from '../common/header.vue';
import navMenu from '../common/navMenu.vue';
import Right from '../common/right.vue';
import {Button, Container, Header, Main, Aside, Input} from 'element-ui'
    export default{
        components:{
            Header,
            navMenu,
            Right
        },
    }
</script>

<style lang="stylus" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-input__inner{
      width: 200px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>

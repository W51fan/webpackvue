<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      unique-opened
      router
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>地图</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">高德</el-menu-item>
            <el-menu-item index="1-2">百度</el-menu-item>
            <el-menu-item index="1-3">谷歌</el-menu-item>
            <el-menu-item index="1-4">必应</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Echarts</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">雷达图</el-menu-item>
            <el-menu-item index="2-2">柱形图</el-menu-item>
            <el-menu-item index="2-3">圆饼图</el-menu-item>
            <el-menu-item index="2-4">散点图</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

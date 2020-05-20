<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">音乐管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/song" class="router-link-init">
            <el-menu-item index="1-1">歌曲</el-menu-item>
          </router-link>
          <router-link to="/songList" class="router-link-init">
            <el-menu-item index="1-2">歌单管理</el-menu-item>
          </router-link>
          <router-link to="/deviceSong" class="router-link-init">
            <el-menu-item index="1-3">设备音乐管理</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/user" class="router-link-init">
            <el-menu-item index="2-1">用户管理</el-menu-item>
          </router-link>
          <router-link to="/role" class="router-link-init">
            <el-menu-item index="2-2">角色管理</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">设备管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/device" class="router-link-init">
            <el-menu-item index="3-1">设备详情</el-menu-item>
          </router-link>
          <router-link to="/advertisement" class="router-link-init">
            <el-menu-item index="3-2">设备广告</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "MenuBar",
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 13%;
    min-height: 400px;
  }

  .router-link-init{
    text-decoration: none;
  }
</style>

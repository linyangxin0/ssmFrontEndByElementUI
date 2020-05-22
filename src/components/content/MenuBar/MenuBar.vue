<template>
  <div>
    <div v-if="$store.state.userName!=''">
      <el-avatar class="top-avatar" v-if="$store.state.isAdmin">admin</el-avatar>
      <el-avatar class="top-avatar" v-if="!$store.state.isAdmin">user</el-avatar>
      <span class="top-user">{{$store.state.userName}}</span>
      <el-popconfirm
        confirmButtonText='确定'
        cancelButtonText='取消'
        icon="el-icon-info"
        iconColor="red"
        @onConfirm="logoutBtn"
        title="确定登出？"
        class="top-btn">
        <el-button slot="reference" class="top-btn-btm">登出</el-button>
      </el-popconfirm>
    </div>
    <div v-if="$store.state.userName==''" class="un-login">
      <span>未登录系统,</span>
      <router-link to="/login" class="router-click ">
        <span>点击登录</span>
      </router-link>
    </div>

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
          <i class="el-icon-receiving"></i>
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
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">系统日志</span>
        </template>
        <el-menu-item-group>
          <router-link to="/systemLog" class="router-link-init">
            <el-menu-item index="4-1">后台访问日志</el-menu-item>
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
        isCollapse: false,

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      logoutBtn(){
        setTimeout(()=>{
          localStorage.clear()
          this.$store.commit("removeUserName")
          this.$router.push('/login')
        },500)
      }
    }
  }
</script>

<style scoped>

  .router-click{
    text-decoration: none;
    color: #ff7f7d;
  }

  .top-btn{
    position: relative;
    bottom: 15px;
    right: 10px;
  }

  .top-btn-btm{
    padding: 5px 10px;
  }

  .top-avatar{
    width: 45px;
    height: 45px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .top-user{
    position: relative;
    bottom: 50px;
    left: 30px;
  }

  .un-login{
    margin: 20px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 13%;
    min-height: 150px;
  }

  .router-link-init{
    text-decoration: none;
  }
</style>

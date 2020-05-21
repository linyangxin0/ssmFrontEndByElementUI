<template>
  <div class="bar-content">
    <el-input class="search-input" placeholder="请输入搜索内容" v-model="searchText" clearable></el-input>
    <el-button type="primary" icon="el-icon-search" @click="searchAdvertisement" class="top-btn">搜索</el-button>
    <el-button type="primary" icon="el-icon-search" @click="findAll" class="top-btn">全部</el-button>
    <router-link to="/advertisement/addAdvertisement" v-if="$store.state.isAdmin">
      <el-button type="primary" icon="el-icon-plus" class="btn">新增广告</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "advertisementTopBar",
    data(){
      return{
        searchText:''
      }
    },
    methods:{
      searchAdvertisement(){
        this.$emit("searchAdvertisement",this.searchText)
      },
      findAll(){
        this.$emit("findAll")
        this.searchText=''
      }
    }
  }
</script>

<style scoped>
  .bar-content{
    height: 60px;
  }

  .search-input{
    width: 300px;

  }

  .top-btn{
    margin-left: 30px;
  }

  .btn{
    float: right;
    margin-right: 30px;
  }
</style>

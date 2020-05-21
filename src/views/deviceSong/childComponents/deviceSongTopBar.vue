<template>
  <div class="bar-content">

    <el-input class="search-input" placeholder="请输入搜索内容" v-model="searchText" clearable></el-input>
    <el-button type="primary" icon="el-icon-search" @click="searchDevice" class="top-btn">搜索</el-button>
    <el-button type="primary" icon="el-icon-search" @click="findAll" class="top-btn">全部</el-button>

<!--    <input type="text" class="search-input" v-model="searchText" placeholder="请输入搜索内容">-->
<!--    <button class="search-btn" @click="searchDevice">搜索</button>-->
<!--    <button class="all-btn" @click="findAll">全部</button>-->
  </div>
</template>

<script>
  export default {
    name: "deviceSongTopBar",
    data(){
      return{
        searchText:''
      }
    },
    methods:{
      searchDevice(){
        this.$emit("searchDevice",this.searchText)
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

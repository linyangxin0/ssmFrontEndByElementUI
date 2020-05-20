<template>
  <div class="bar-content">
    <el-input class="search-input" placeholder="请输入搜索内容" v-model="searchText" clearable></el-input>
    <el-button type="primary" icon="el-icon-search" @click="searchSong" class="top-btn">搜索</el-button>
    <el-button type="primary" icon="el-icon-search" @click="findAll" class="top-btn">全部</el-button>
    <router-link to="/song/addSong" v-if="$store.state.isAdmin">
      <el-button type="primary" icon="el-icon-plus" class="btn">新增歌曲</el-button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "SongTopBar",
    data(){
      return{
        searchText:''
      }
    },
    props:{},
    methods:{
      searchSong(){
        this.$emit("searchSong",this.searchText)
      },
      findAll(){
        this.$emit("findAll")
        this.searchText=''
      }
    },
    created() {
    }

  }
</script>

<style scoped>
  .bar-content{
    height: 60px;
  }

  .search-input{
    /*height: 30px;*/
    /*border-radius: 5px;*/
    /*border: 1.5px #adadad solid;*/
    /*padding-left: 20px;*/

    width: 300px;

  }

  .top-btn{
    margin-left: 30px;
  }

  .search-btn{
    margin-left: 30px;
    border-radius: 5px;
    height: 35px;
    width: 60px;
    background-color: #c8c8c8;
    border: none;
    cursor: pointer;
  }

  .all-btn{
    margin-left: 30px;
    border-radius: 5px;
    height: 35px;
    width: 60px;
    background-color: #ececec;
    border: 1px #c8c8c8 solid;
    cursor: pointer;
  }

  .btn{
    float: right;
    margin-right: 30px;
  }


</style>

<template>
  <div class="add-content">
    <table class="add-table">
      <tr>
        <td ><span>歌单名称：</span></td>
        <td>
<!--          <input type="text" placeholder="请输入歌单名称" class="add-input" v-model="addName">-->
          <el-input class="add-input" placeholder="请输入歌单名称" v-model="addName" clearable ></el-input>
        </td>
      </tr>


      <tr>
        <td class="btn-center">
<!--          <button class="add-btn" @click="clickAddSong">确定</button>-->
          <el-button type="success" @click="clickAddSong">确定</el-button>
        </td>
        <td class="btn-center">
<!--          <button class="add-btn"  @click="backClick">取消</button>-->
          <el-button type="info" @click="backClick">取消</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {addSongList} from "../../../network/songList";

  export default {
    name: "addSongList",
    data(){
      return{
        addName:'',
      }
    },
    methods:{
      clickAddSong(){
        addSongList(this.addName).then(res=>{
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.$router.back()
        })
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .add-content{
    width: 600px;
    height: 400px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  .add-table{
    width: 600px;
    height: 200px;
  }

  .add-input{
    margin-left: 20px;
    width: 300px;
    height: 40px;
  }

  .btn-center{
    text-align: center;
  }

  .add-btn{
    width: 80px;
    height: 40px;

    border-radius: 2px;
    border: none;
    background-color: #d3d3d3;
  }
</style>

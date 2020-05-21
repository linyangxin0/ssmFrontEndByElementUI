<template>
  <div class="add-content">
    <table class="add-table">
      <tr>
        <td ><span>歌曲名称：</span></td>
        <td>
          <el-input class="add-input" placeholder="请输入歌曲名称" v-model="addName" clearable ></el-input>
        </td>
      </tr>

      <tr>
        <td><span>歌曲描述：</span></td>
        <td>
          <el-input class="add-input" placeholder="请输入歌曲描述" v-model="addInfo" clearable ></el-input>

        </td>
      </tr>

      <tr>
        <td><span>作者：</span></td>
        <td>
          <el-input class="add-input" placeholder="请输入作者" v-model="addAuthor" clearable ></el-input>

        </td>
      </tr>

      <tr>
        <td><span>请选择日期：</span></td>
        <td>
          <el-date-picker v-model="addUpdateTime" type="date" placeholder="选择日期" class="add-input" value-format="yyyy-MM-dd"></el-date-picker>
        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>
          <el-select v-model="addStatus" placeholder="请选择" class="add-input">
            <el-option value=0 label="设计中" :key="0"></el-option>
            <el-option value=1 label="发布" :key="1"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <el-button type="success" @click="clickAddSong">确定</el-button>
        </td>
        <td class="btn-center">
          <el-button type="info" @click="backClick">取消</el-button>
        </td>
      </tr>
    </table>
  </div>

</template>

<script>
  import {addSong} from "../../../network/song";

  export default {
    name: "addSong",
    data(){
      return{
        addName:'',
        addInfo:'',
        addAuthor:'',
        addUpdateTime:'',
        addStatus:'0'
      }
    },
    methods:{
      clickAddSong(){
        addSong(this.addName,this.addInfo,this.addAuthor,this.addUpdateTime,this.addStatus).then(res=>{
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
    height: 400px;
  }

  .add-input{
    margin-left: 20px;
    width: 300px;
    height: 40px;
  }

  .btn-center{
    text-align: center;
  }


</style>

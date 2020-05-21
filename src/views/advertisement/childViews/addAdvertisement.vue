<template>
  <div class="add-content">
    <table class="add-table">
      <tr>
        <td ><span>广告内容：</span></td>
        <td>
          <el-input class="add-input" placeholder="请输入广告内容" v-model="addContext" clearable ></el-input>
        </td>
      </tr>

      <tr>
        <td><span>请选择日期：</span></td>
        <td>
          <el-date-picker v-model="addGetDate" type="date" placeholder="选择日期" class="add-input" value-format="yyyy-MM-dd"></el-date-picker>

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

  import {addAdvertisement} from "../../../network/advertisement";

  export default {
    name: "addAdvertisement",
    data(){
      return{
        addContext:'',
        addGetDate:'',
      }
    },
    methods:{
      clickAddSong(){
        addAdvertisement(this.addContext,this.addGetDate).then(res=>{
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

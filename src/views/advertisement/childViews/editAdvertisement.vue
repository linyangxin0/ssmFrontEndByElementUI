<template>
  <div class="edit-content">
    <table class="edit-table">

      <tr>
        <td ><span>广告内容：</span></td>
        <td>
          <el-input class="add-input" placeholder="请输入广告内容" v-model="editContext" clearable ></el-input>

        </td>
      </tr>

      <tr>
        <td><span>请选择日期：</span></td>
        <td>
          <el-date-picker v-model="editGetDate" type="date" placeholder="选择日期" class="add-input" value-format="yyyy-MM-dd"></el-date-picker>

        </td>
      </tr>


      <tr>
        <td class="btn-center">
          <el-button type="success" @click="clickEditAdvertisement">确定</el-button>

        </td>
        <td class="btn-center">
          <el-button type="info" @click="backClick">取消</el-button>

        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {findAdvertisementById,editAdvertisement} from "../../../network/advertisement";
  import {formatDate} from "../../../common/utils";

  export default {
    name: "editAdvertisement",
    data(){
      return{
        editContext:0,
        editGetDate:'',
        editId:0
      }
    },
    props:{

    },
    methods:{
      clickEditAdvertisement(){
        editAdvertisement(this.editId,this.editContext,this.editGetDate).then(res=>{
          this.$message({
            message: '编辑成功',
            type: 'success'
          });
          this.$router.back()
        })
      },
      backClick(){
        this.$router.back()
      }
    },
    created() {
      this.editId=this.$route.params.id
      findAdvertisementById(this.editId).then(res=>{
        this.editContext=res.context
        this.editGetDate=res.getDate

        //时间戳转换为日期
        this.editGetDate = formatDate(new Date(this.editGetDate), 'yyyy-MM-dd')
      })
    }
  }
</script>

<style scoped>
  .edit-content{
    width: 600px;
    height: 400px;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto auto;
  }

  .edit-table{
    width: 600px;
    height: 400px;
  }

  .edit-input{
    padding-left: 20px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #d3d3d3;
  }

  .btn-center{
    text-align: center;
  }

  .edit-btn{
    width: 80px;
    height: 40px;

    border-radius: 2px;
    border: none;
    background-color: #d3d3d3;
  }
</style>

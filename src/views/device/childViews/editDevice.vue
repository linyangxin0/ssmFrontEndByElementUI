<template>
  <div class="edit-content">
    <table class="edit-table">

      <tr>
        <td ><span>ID：</span></td>
        <td>
<!--          <input type="text" class="edit-input" v-model="editId" disabled>-->
          <el-input v-model="editId" clearable disabled class="edit-input"></el-input>
        </td>
      </tr>

      <tr>
        <td ><span>设备名称：</span></td>
        <td>
<!--          <input type="text" placeholder="请输入设备名称" class="edit-input" v-model="editName">-->
          <el-input class="edit-input" placeholder="请输入设备名称" v-model="editName" clearable ></el-input>

        </td>
      </tr>

      <tr>
        <td><span>请选择设备类型：</span></td>
        <td>
<!--          <select class="edit-input" v-model="editType">-->
<!--            <option value="0">Android设备</option>-->
<!--            <option value="1">开发板设备</option>-->
<!--          </select>-->


          <el-select v-model="editType" placeholder="请选择" class="edit-input">
            <el-option value=0 label="Android设备" :key="0"></el-option>
            <el-option value=1 label="开发板设备" :key="1"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td><span>请选择设备状态：</span></td>
        <td>
<!--          <select class="edit-input" v-model="editStatus">-->
<!--            <option value="0">离线</option>-->
<!--            <option value="1">在线</option>-->
<!--          </select>-->

          <el-select v-model="editStatus" placeholder="请选择" class="edit-input">
            <el-option value=0 label="离线" :key="0"></el-option>
            <el-option value=1 label="在线" :key="1"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
<!--          <button class="edit-btn" @click="clickEditDevice">确定</button>-->
          <el-button type="success" @click="clickEditDevice">确定</el-button>

        </td>
        <td class="btn-center">
<!--          <button class="edit-btn"  @click="backClick">取消</button>-->
          <el-button type="info" @click="backClick">取消</el-button>

        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {findDeviceById,editDevice} from "../../../network/device";

  export default {
    name: "editDevice",
    data(){
      return{
        editId:0,
        editName:'',
        editType:'0',
        editStatus:'0'
      }
    },
    props:{
      song:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
      clickEditDevice(){
        editDevice(this.editId,this.editName,this.editType,this.editStatus).then(res=>{
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
      findDeviceById(this.editId).then(res=>{
        //进入界面时，填入信息
        this.editName=res.name
        this.editType=res.type+''
        this.editStatus=res.status+''
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
    margin-left: 20px;
    width: 300px;
    height: 40px;
  }

  .btn-center{
    text-align: center;
  }
</style>

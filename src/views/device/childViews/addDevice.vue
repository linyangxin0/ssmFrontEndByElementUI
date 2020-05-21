<template>
  <div class="add-content">
    <table class="add-table">

      <tr>
        <td ><span>设备MAC码：</span></td>
        <td>
          <el-input class="add-input" placeholder="请输入设备MAC码" v-model="addId" clearable ></el-input>
        </td>
      </tr>

      <tr>
        <td ><span>设备名称：</span></td>
        <td>
          <el-input class="add-input" placeholder="请输入设备名称" v-model="addName" clearable ></el-input>
        </td>
      </tr>

      <tr>
        <td><span>请选择类型：</span></td>
        <td>
          <el-select v-model="addType" placeholder="请选择类型" class="add-input">
            <el-option value=0 label="Android手机端" :key="0"></el-option>
            <el-option value=1 label="开发板设备" :key="1"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>
          <el-select v-model="addStatus" placeholder="请选择状态" class="add-input">
            <el-option value=0 label="离线" :key="0"></el-option>
            <el-option value=1 label="在线" :key="1"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <el-button type="success" @click="clickAddDevice">确定</el-button>

        </td>
        <td class="btn-center">
          <el-button type="info" @click="backClick">取消</el-button>

        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {addDevice} from "../../../network/device";

  export default {
    name: "addDevice",
    data(){
      return{
        addId:'',
        addName:'',
        addType:'0',
        addStatus:'0'
      }
    },
    methods:{
      clickAddDevice(){
        addDevice(this.addId,this.addName,this.addType,this.addStatus).then(res=>{
          this.$message({
            message: '添加成功',
            type: 'success'
          });
            this.$router.back();
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

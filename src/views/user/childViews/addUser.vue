<template>
  <div class="add-content">
    <table class="add-table">
      <tr>
        <td ><span>用户名：</span></td>
        <td>
          <el-input class="add-input" placeholder="请输入用户名称" v-model="addName" clearable ></el-input>
        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>
          <el-select v-model="addStatus" placeholder="请选择" class="add-input">
            <el-option value=0 label="未激活" :key="0"></el-option>
            <el-option value=1 label="激活" :key="1"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <el-button type="success" @click="clickAddUser">确定</el-button>

        </td>
        <td class="btn-center">
          <el-button type="info" @click="backClick">取消</el-button>

        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {addUser} from "../../../network/user";

  export default {
    name: "addUser",
    data(){
      return{
        addName:'',
        addStatus:'0'
      }
    },
    methods:{
      clickAddUser(){
        addUser(this.addName,this.addStatus).then(res=>{
          this.$message({
            message: '添加成功，默认密码为“123”',
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

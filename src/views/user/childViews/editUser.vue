<template>
  <div class="edit-content">
    <table class="edit-table">

      <tr>
        <td ><span>ID：</span></td>
        <td>
          <el-input v-model="editId" clearable disabled class="edit-input"></el-input>
        </td>
      </tr>

      <tr>
        <td ><span>用户名称：</span></td>
        <td>
          <el-input class="edit-input" placeholder="请输入用户名称" v-model="editName" clearable ></el-input>
        </td>
      </tr>

      <tr>
        <td><span>请选择状态：</span></td>
        <td>
          <el-select v-model="editStatus" placeholder="请选择" class="edit-input">
            <el-option value=0 label="未激活" :key="0"></el-option>
            <el-option value=1 label="激活" :key="1"></el-option>
          </el-select>
        </td>
      </tr>

      <tr>
        <td class="btn-center">
          <el-button type="success" @click="clickEditUser">确定</el-button>

        </td>
        <td class="btn-center">
          <el-button type="info" @click="backClick">取消</el-button>

        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import {findUserById,updateUser} from "../../../network/user";

  export default {
    name: "editUser",
    data(){
      return{
        roleId:0,
        role:{},
        editId:0,
        editName:'',
        editStatus:'0'
      }
    },
    created() {
      this.roleId=this.$route.params.id

      findUserById(this.roleId).then(res=>{
        this.role=res
        this.editId=this.role.id
        this.editName=this.role.name
        this.editStatus=this.role.status+''
      })
    },
    methods:{
      backClick(){
        this.$router.back()
      },
      clickEditUser(){
        updateUser(this.editId,this.editName,this.editStatus).then(res=>{
          this.$message({
            message: '编辑成功',
            type: 'success'
          });
          this.backClick()
        })
      }
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

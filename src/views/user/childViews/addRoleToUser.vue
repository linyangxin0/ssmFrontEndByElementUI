<template>
  <el-table
    :data="roles"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="角色名称"
      width="300">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" v-if="$store.state.isAdmin">
        <el-button @click="addRole(scope.row)" type="text" size="big">添加角色</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {findRoleNotIn,addRoleToUser} from "../../../network/user";

  export default {
    name: "addRoleToUser",
    data(){
      return{
        userId:0,
        roles:[]
      }
    },
    created() {
      this.userId = this.$route.params.id

      this._findRoleNotIn()
    },
    methods:{
      addRole(row){
        addRoleToUser(this.userId,row.id).then(res=>{
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this._findRoleNotIn()
        })
      },
      _findRoleNotIn(){
        findRoleNotIn(this.userId).then(res=>{
          this.roles=res
        })
      }
    }
  }
</script>

<style scoped>
  table{
    width: 100%;
  }

  tr{
    display: flex;

    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d3d3d3;
  }
  th,td{
    flex: 1;
    text-align: left;
  }

  .text-red{
    color: red;
  }

  .none-content{
    width: 500px;
    height: 100px;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto auto;
  }

  .none-text{
    font-size: 25px;
  }

  .list-btn{
    width: 90px;
    height: 30px;

    border-radius: 5px;
    border: 1px solid #707070;
    background-color: #fff;
    margin-right: 20px;
  }
</style>

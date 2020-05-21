<template>
  <el-table
    :data="userList"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="200">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="200"
      :formatter="formatStatus">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" v-if="$store.state.isAdmin">
        <el-button @click="editUser(scope.row)" type="text" size="big">编辑</el-button>
        <el-button @click="addRoleToUser(scope.row)" type="text" size="big">添加角色</el-button>
        <el-button @click="delUser(scope.row)" type="text" size="big">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "EUserList",
    props:{
      userList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      delUser(row){
        this.$emit("delUser",row.id)
      },
      editUser(row){
        this.$router.push('/user/editUser/'+row.id)
      },
      addRoleToUser(row){
        this.$router.push('/user/addRoleToUser/'+row.id)
      },
      formatStatus(row, column){
        return row.status==0?'未激活':'激活'
      }
    }
  }
</script>

<style scoped>

</style>

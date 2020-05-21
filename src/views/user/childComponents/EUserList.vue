<template>
  <el-table
    :data="userList"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="200"
      sortable>
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
        <el-popconfirm
          confirmButtonText='确定'
          cancelButtonText='取消'
          icon="el-icon-info"
          iconColor="red"
          @onConfirm="delUser(scope.row)"
          title="确定删除？">
          <el-button type="text" size="big" slot="reference" class="del-btn">删除</el-button>
        </el-popconfirm>
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
  .del-btn{
    padding-left: 12px;
  }
</style>

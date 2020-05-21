<template>
  <el-table
    :data="roleList"
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
        <el-button @click="findUserByRole(scope.row)" type="text" size="big">查看用户</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "ERoleList",
    methods:{
      findUserByRole(row){
        this.$router.push('/role/delUserFromRole/'+row.id)
      }
    },
    props:{
      roleList:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>

</style>

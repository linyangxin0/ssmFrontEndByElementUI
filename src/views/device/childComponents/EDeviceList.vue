<template>
  <el-table
    :data="deviceList"
    border
    max-height="650"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="200"
      sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="type"
      label="设备类型"
      width="200"
      :formatter="formatterType">
    </el-table-column>
    <el-table-column
      prop="status"
      label="当前状态"
      width="200"
      :formatter="formatterStatus">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" v-if="$store.state.isAdmin">
        <el-button @click="editSong(scope.row)" type="text" size="big">编辑</el-button>
        <el-popconfirm
          confirmButtonText='确定'
          cancelButtonText='取消'
          icon="el-icon-info"
          iconColor="red"
          @onConfirm="delDevice(scope.row)"
          title="确定删除？">
          <el-button type="text" size="big" slot="reference" class="del-btn">删除</el-button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "EDeviceList",
    props:{
      deviceList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      delDevice(row){
        this.$emit("delDevice",row.id)
      },
      editSong(row){
        this.$router.push("/device/editDevice/"+row.id)
      },
      formatterStatus(row, column){
        return row.status==0?'离线':'在线'
      },
      formatterType(row, column){
        return row.type==0?'Android设备':'开发板设备'
      },
    }
  }
</script>

<style scoped>
  .del-btn{
    padding-left: 12px;
  }
</style>

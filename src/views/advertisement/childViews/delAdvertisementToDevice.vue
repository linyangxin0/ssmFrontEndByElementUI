<template>
  <el-table
    :data="deviceList"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="200">
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
        <el-button @click="delAdvertisementTo(scope.row)" type="text" size="big">取消推送</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

  import {findDeviceInById,delAdvertisementFromDevice} from "../../../network/advertisement";

  export default {
    name: "delAdvertisementToDevice",
    data(){
      return{
        deviceList:[],
        advertisementId:0
      }
    },
    methods:{
      formatterStatus(row, column){
        return row.status==0?'离线':'在线'
      },
      formatterType(row, column){
        return row.type==0?'Android设备':'开发板设备'
      },
      _findDeviceInById(){
        findDeviceInById(this.advertisementId).then(res=>{
          this.deviceList=res
        })
      },
      delAdvertisementTo(row){
        delAdvertisementFromDevice(row.id,this.advertisementId).then(res=>{
          this.$message({
            message: '取消推送成功',
            type: 'success'
          });
          this._findDeviceInById()
        })
      }
    },
    created() {
      this.advertisementId=this.$route.params.id
      this._findDeviceInById()
    }
  }
</script>

<style scoped>

</style>

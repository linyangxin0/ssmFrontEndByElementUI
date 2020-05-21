<template>
<!--  <div class="list-content">-->
<!--    <div v-if="deviceList.length==0" class="none-content">-->
<!--      <span class="none-text">无可推送设备，或该广告已推送给所有设备.</span>-->
<!--    </div>-->
<!--    <table v-if="deviceList.length!=0">-->
<!--      <tr>-->
<!--        <th>序号</th>-->
<!--        <th>设备名称</th>-->
<!--        <th>设备类型</th>-->
<!--        <th>操作</th>-->
<!--      </tr>-->
<!--      <tr v-for="item in deviceList">-->
<!--        <td>{{item.id}}</td>-->
<!--        <td>{{item.name}}</td>-->
<!--        <td v-if="item.type==0">Android设备</td>-->
<!--        <td v-if="item.type!=0">开发板设备</td>-->
<!--        <td>-->
<!--          <button class="list-btn-add" @click="addAdvertisementTo(item.id)">添加推送</button>-->
<!--        </td>-->
<!--      </tr>-->
<!--    </table>-->
<!--  </div>-->

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
        <el-button @click="addAdvertisementTo(scope.row)" type="text" size="big">添加推送</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {findDeviceNotIn,addAdvertisementToDevice} from "../../../network/advertisement";

  export default {
    name: "addAdvertisementToDevice",
    data(){
      return{
        deviceList:[],
        advertisementId:0
      }
    },
    created() {
      this.advertisementId=this.$route.params.id
      this._findDeviceNotIn()
    },
    methods:{
      _findDeviceNotIn(){
        findDeviceNotIn(this.advertisementId).then(res=>{
          this.deviceList=res
        })
      },
      addAdvertisementTo(row){
        addAdvertisementToDevice(this.advertisementId,row.id).then(res=>{
          this.$message({
            message: '添加推送成功',
            type: 'success'
          });
          this._findDeviceNotIn()
        })
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

</style>

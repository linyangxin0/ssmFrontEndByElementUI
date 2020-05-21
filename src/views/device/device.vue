<template>
  <div class="content">
    <device-top-bar @searchDevice="searchDevice" @findAll="findAll"/>
    <e-device-list :device-list="deviceList" @delDevice="delDevice"/>
  </div>
</template>

<script>

  import {deviceFindAll,deviceSearch,delDevice} from "../../network/device";

  import DeviceTopBar from "./childComponents/DeviceTopBar";
  import EDeviceList from "./childComponents/EDeviceList";
  export default {
    name: "device",
    components: {EDeviceList, DeviceTopBar},
    data(){
      return{
        deviceList:[]
      }
    },
    created() {
      this._deviceFindAll()
    },
    methods:{
      _deviceFindAll(){
        deviceFindAll().then(res=>{
          this.deviceList=res
        })
      },
      searchDevice(searchText){
        deviceSearch(searchText).then(res=>{
          this.deviceList=res
        })
      },
      findAll(){
        this._deviceFindAll()
      },
      delDevice(id){
        delDevice(id).then(res=>{
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this._deviceFindAll()
        })
      }
    }
  }
</script>

<style scoped>
  .content{
    margin: 20px;
  }
</style>

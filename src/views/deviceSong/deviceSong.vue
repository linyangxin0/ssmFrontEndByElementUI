<template>
  <div class="content">
    <device-song-top-bar @searchDevice="searchDevice" @findAll="findAll"/>
<!--    <device-song-list :device-list="deviceList"/>-->
    <e-device-song-list :device-list="deviceList"/>
  </div>
</template>

<script>

  import {deviceFindAll} from "../../network/deviceSong";

  import DeviceSongTopBar from "./childComponents/deviceSongTopBar";
  import {deviceSearch} from "../../network/device";
  import EDeviceSongList from "./childComponents/EDeviceSongList";

  export default {
    name: "deviceSong",
    data(){
      return{
        deviceList:[]
      }
    },
    components: {EDeviceSongList, DeviceSongTopBar},
    created() {
      deviceFindAll().then(res=>{
        this.deviceList=res
      })
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
    }
  }
</script>

<style scoped>
  .content{
    margin: 20px;
  }
</style>

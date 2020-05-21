<template>
  <div>
<!--    <add-device-song-list :song-list="songList" @cancelSongList="cancelSongList"/>-->
    <e-add-device-song-list :song-list="songList" @cancelSongList="cancelSongList"/>
  </div>
</template>

<script>
  import {findSongListIn,cancelSongList} from "../../../network/deviceSong";

  import AddDeviceSongList from "../childComponents/addDeviceSongList";
  import EAddDeviceSongList from "../childComponents/EAddDeviceSongList";
  export default {
    name: "addDeviceSong",
    components: {EAddDeviceSongList, AddDeviceSongList},
    data(){
      return{
        deviceId:'',
        songList:[]
      }
    },
    created() {
      this.deviceId=this.$route.params.id
      this._findSongListIn()
    },
    methods:{
      _findSongListIn(){
        findSongListIn(this.deviceId).then(res=>{
          this.songList=res
        })
      },
      cancelSongList(songListId){
        cancelSongList(songListId,this.deviceId).then(res=>{
          this.$message({
            message: '取消推送成功',
            type: 'success'
          });
          this._findSongListIn()
        })
      }
    }
  }
</script>

<style scoped>

</style>

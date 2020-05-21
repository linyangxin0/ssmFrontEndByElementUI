<template>
  <div>
    <e-device-song-show-list :song-list="songLists" @addSongList="addSongList"/>
  </div>
</template>

<script>
  import {findSongListNotIn,addSongList} from "../../../network/deviceSong";

  import DeviceSongShowList from "../childComponents/deviceSongShowList";
  import EDeviceSongList from "../childComponents/EDeviceSongList";
  import EDeviceSongShowList from "../childComponents/EDeviceSongShowList";
  export default {
    name: "deviceSongShow",
    components: {EDeviceSongShowList},
    data(){
      return{
        deviceId:'',
        songLists:[]
      }
    },
    created() {
      this.deviceId = this.$route.params.id
      this._findSongListNotIn()
    },
    methods:{
      addSongList(songListId){
        addSongList(songListId,this.deviceId).then(res=>{
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this._findSongListNotIn()
        })
      },
      _findSongListNotIn(){
        findSongListNotIn(this.deviceId).then(res=>{
          this.songLists=res
        })
      }
    }
  }
</script>

<style scoped>

</style>

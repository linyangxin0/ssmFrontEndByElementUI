<template>
  <div>
<!--    <add-song-to-song-list-list :song-list="songs" @addSongToSongList="addSongToSongList"/>-->
    <e-add-song-to-song-list-list :song-list="songs" @addSongToSongList="addSongToSongList"/>
  </div>
</template>

<script>

  import {findSongNotIn,addSongToSongList} from "../../../network/songList";
  import EAddSongToSongListList from "../childComponents/EAddSongToSongListList";

  export default {
    name: "addSongToSongList",
    components: {EAddSongToSongListList},
    data(){
      return{
        id:0,
        songs:[]
      }
    },
    created() {
      this.id=this.$route.params.id
      //查询未添加到歌单的歌曲
      this._findSongNotIn()
    },
    methods:{
      addSongToSongList(id){
        addSongToSongList(id,this.id).then(res=>{
          this._findSongNotIn()
          this.$message({
            message: '添加成功',
            type: 'success'
          });
        })
      },
      _findSongNotIn(){
        findSongNotIn(this.id).then(res=>{
          this.songs=res
        })
      }
    }
  }
</script>

<style scoped>

</style>

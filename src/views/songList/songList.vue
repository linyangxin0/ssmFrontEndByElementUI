<template>
  <div class="content">
    <song-list-top-bar @searchSongList="searchSongList" @findAllSongList="findAllSongList"/>
    <e-song-list-list :song-list-list="songListList"
                      @getSongList="getSongList"
                      @delSongList="delSongList"/>
  </div>
</template>

<script>

  import SongListTopBar from "./childComponents/SongListTopBar";

  import {songListFindAll,delSongList,findSongListByName} from "../../network/songList";
  import ESongListList from "./childComponents/ESongListList";

  export default {
    name: "songList",
    components: {ESongListList, SongListTopBar},
    data(){
      return{
        songListList:[]
      }
    },
    created() {
      this._songListFindAll()
    },
    methods:{
      _songListFindAll(){
        songListFindAll().then(res=>{
          this.songListList=res
        })
      },
      getSongList(id){
        this.$router.push('/songList/songListShow/'+id)
      },
      delSongList(id){
        delSongList(id).then(res=>{
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this._songListFindAll()
        })
      },
      searchSongList(searchText){
        findSongListByName(searchText).then(res=>{
          this.songListList=res
        })
      },
      findAllSongList(){
        this._songListFindAll()
      }
    }

  }
</script>

<style scoped>

  .content{
    margin: 20px;
  }
</style>

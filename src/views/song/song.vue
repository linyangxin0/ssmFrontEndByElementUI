<template>
  <div class="content">
    <song-top-bar @searchSong="searchSong" @findAll="findAll"/>
    <e-song-list :song-list="songsList" @delSong="delSong" @editSong="editSong"/>
  </div>
</template>

<script>
  import SongTopBar from "./childComponents/SongTopBar";
  import SongList from "./childComponents/SongList";
  import {songFindAll,songSearch,delASong} from "../../network/song";
  import ESongList from "./childComponents/ESongList";

  export default {
    name: "song",
    components: {ESongList, SongList, SongTopBar},
    data(){
      return{
        songsList:[],
        theEditSong:{}
      }
    },
    created() {
      //请求歌曲数据
      this._songFindAll()
    },
    methods:{
      //请求搜索歌曲数据
      searchSong(searchText){
        songSearch(searchText).then(res=>{
          this.songsList=res
        })
      },
      findAll(){
        //请求歌曲数据
        songFindAll().then(res=>{
          this.songsList=res
        })
      },
      delSong(e){
        delASong(e).then(res=>{
          this._songFindAll()
        })
      },
      editSong(e){
        console.log(e)
        this.theEditSong=e
        this.$router.push('/song/editSong/'+e)
      },
      _songFindAll(){
        songFindAll().then(res=>{
          this.songsList=res
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

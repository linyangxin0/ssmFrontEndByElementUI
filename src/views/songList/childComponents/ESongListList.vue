<template>
  <el-table
    :data="songListList"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="歌曲名称"
      width="500">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" v-if="$store.state.isAdmin">
        <el-button @click="getSongList(scope.row)" type="text" size="big">查看</el-button>
        <el-button @click="addSongToSongList(scope.row)" type="text" size="big">添加</el-button>
        <el-button @click="delSongList(scope.row)" type="text" size="big">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "ESongListList",
    props:{
      songListList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      getSongList(row){
        this.$emit("getSongList",row.id)
      },
      addSongToSongList(row){
        this.$router.push('/songList/addSongToSongList/'+row.id)
      },
      delSongList(row){
        this.$emit("delSongList",row.id)
      }
    }
  }
</script>

<style scoped>

</style>

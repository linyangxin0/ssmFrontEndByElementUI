<template>
  <el-table
    :data="songList"
    border
    max-height="650"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="300">
    </el-table-column>
    <el-table-column
      prop="name"
      label="歌单名称"
      width="500">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" v-if="$store.state.isAdmin">
        <el-button @click="cancelSongList(scope.row)" type="text" size="big">取消推送</el-button>

      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "EAddDeviceSongList",
    props:{
      songList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      cancelSongList(row){
        this.$emit("cancelSongList",row.id)
      },
    }
  }
</script>

<style scoped>

</style>

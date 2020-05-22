<template>
  <el-table
    :data="deviceList"
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
      label="设备名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="type"
      label="设备类型"
      width="300"
      :formatter="formatterType">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" v-if="$store.state.isAdmin">
        <el-button @click="getDeviceSong(scope.row)" type="text" size="big">查看歌单</el-button>
        <el-button @click="addDeviceSong(scope.row)" type="text" size="big">添加歌单</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "EDeviceSongList",
    props:{
      deviceList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      addDeviceSong(row){
        this.$router.push("/deviceSong/addDeviceSong/"+row.id)
      },
      getDeviceSong(row){
        this.$router.push("/deviceSong/deviceSongShow/"+row.id)
      },
      formatterType(row, column){
        return row.type==0?'Android设备':'开发板设备'
      }
    }
  }
</script>

<style scoped>

</style>

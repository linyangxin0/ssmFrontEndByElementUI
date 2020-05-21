<template>
  <el-table
    :data="songList"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="歌曲名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="info"
      label="信息"
      width="120">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作家"
      width="180">
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="更新时间"
      width="200"
      :formatter="dateFormat">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="120"
      :formatter="formatterStatus">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" v-if="$store.state.isAdmin">
        <el-button @click="addSongToSongList(scope.row)" type="text" size="big">添加</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

  import {formatDate} from "../../../common/utils";

  export default {
    name: "EAddSongToSongListList",
    methods: {
      dateFormat:function(row, column){
        let date = new Date(row.updateTime);
        return formatDate(date, 'yyyy-MM-dd')
      },
      formatterStatus(row, column){
        return row.status==0?'设计中':'发布'
      },
      addSongToSongList(row){
        this.$emit("addSongToSongList",row.id)
      }
    },
    props:{
      songList:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <el-table
    :data="songList"
    border
    max-height="650"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="150"
      sortable>
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
      sortable
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
        <el-button @click="editSong(scope.row)" type="text" size="big">编辑</el-button>
        <el-popconfirm
          confirmButtonText='确定'
          cancelButtonText='取消'
          icon="el-icon-info"
          iconColor="red"
          @onConfirm="delSong(scope.row)"
          title="确定删除？">
          <el-button type="text" size="big" slot="reference" class="del-btn">删除</el-button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

  import {formatDate} from "@/common/utils";


  export default {
    name: "ESongList",
    methods: {
      editSong(row) {
        this.$emit("editSong",row.id)
      },
      delSong(row){
        this.$emit("delSong",row.id)
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      },
      dateFormat:function(row, column){
        let date = new Date(row.updateTime);
        return formatDate(date, 'yyyy-MM-dd')
      },
      formatterStatus(row, column){
        return row.status==0?'设计中':'发布'
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
  .del-btn{
    padding-left: 12px;
  }
</style>

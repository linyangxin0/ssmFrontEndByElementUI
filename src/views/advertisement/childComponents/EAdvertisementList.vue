<template>
  <el-table
    :data="advertisementList"
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
      prop="context"
      label="广告内容"
      width="700">
    </el-table-column>
    <el-table-column
      prop="getDate"
      label="更新时间"
      width="200"
      sortable
      :formatter="dateFormat">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope" v-if="$store.state.isAdmin">
        <el-button @click="editAdvertisement(scope.row)" type="text" size="big">编辑</el-button>
        <el-button @click="addAdvertisementToDevice(scope.row)" type="text" size="big">添加设备</el-button>
        <el-button @click="delAdvertisementToDevice(scope.row)" type="text" size="big">查看设备</el-button>
        <el-popconfirm
          confirmButtonText='确定'
          cancelButtonText='取消'
          icon="el-icon-info"
          iconColor="red"
          @onConfirm="delAdvertisement(scope.row)"
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
    name: "EAdvertisementList",
    props:{
      advertisementList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      dateFormat:function(row, column){
        let date = new Date(row.getDate);
        return formatDate(date, 'yyyy-MM-dd')
      },
      delAdvertisement(row){
        this.$emit("delAdvertisement",row.id)
      },
      editAdvertisement(row){
        this.$router.push('/advertisement/editAdvertisement/'+row.id)
      },
      addAdvertisementToDevice(row){
        this.$router.push('/advertisement/addAdvertisementToDevice/'+row.id)
      },
      delAdvertisementToDevice(row){
        this.$router.push('/advertisement/delAdvertisementToDevice/'+row.id)
      }
    }
  }
</script>

<style scoped>
  .del-btn{
    padding-left: 12px;
  }
</style>

<template>
  <el-table
    :data="systemLog"
    border
    style="width: 100%"
    max-height="700">
    <el-table-column
      prop="id"
      label="ID"
      width="100"
      sortable>
    </el-table-column>
    <el-table-column
      prop="userId"
      label="用户ID"
      width="100"
      sortable>
    </el-table-column>
    <el-table-column
      prop="ip"
      label="IP地址"
      width="100"
      sortable>
    </el-table-column>
    <el-table-column
      prop="url"
      label="URL"
      width="150"
      sortable>
    </el-table-column>
    <el-table-column
      prop="visitTime"
      label="访问时间"
      width="120"
      sortable
      :formatter="dateFormat">
    </el-table-column>
    <el-table-column
      prop="executionTime"
      label="执行时间"
      width="120"
      sortable>
    </el-table-column>
    <el-table-column
      prop="method"
      label="执行方法"
      sortable>
    </el-table-column>
  </el-table>
</template>

<script>

  import {formatDate} from "@/common/utils";

  export default {
    name: "systemLogList",
    props:{
      systemLog:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      dateFormat:function(row, column){
        let date = new Date(row.visitTime);
        return formatDate(date, 'yyyy-MM-dd')
      },
    }
  }
</script>

<style scoped>

</style>

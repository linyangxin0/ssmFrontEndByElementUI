<template>
  <system-log-list :system-log="systemLog"/>
</template>

<script>

  import {systemLogFindAll} from "../../network/systemLog";

  import SystemLogList from "./childComponents/systemLogList";
  export default {
    name: "systemLog",
    components: {SystemLogList},
    data(){
      return{
        systemLog:[]
      }
    },
    created() {
      systemLogFindAll().then(res=>{
        this.systemLog=res
      })
    }
  }
</script>

<style scoped>

</style>

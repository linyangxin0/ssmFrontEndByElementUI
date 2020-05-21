<template>
  <div>
<!--    <del-user-from-role-list :user-list="userList" @delUserFromRole="delUserFromRole"/>-->
    <e-del-user-from-role-list :user-list="userList" @delUserFromRole="delUserFromRole"/>
  </div>
</template>

<script>
  import {findUserByRoleId,delUserFromRole} from "../../../network/Role";
  import DelUserFromRoleList from "../childComponents/delUserFromRoleList";
  import EDelUserFromRoleList from "../childComponents/EDelUserFromRoleList";

  export default {
    name: "delUserFromRole",
    components: {EDelUserFromRoleList, DelUserFromRoleList},
    data(){
      return{
        roleId:0,
        userList:[]
      }
    },
    created() {
      this.roleId=this.$route.params.id

      this._findUserByRoleId()

    },
    methods:{
      delUserFromRole(id){
        delUserFromRole(id,this.roleId).then(res=>{
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this._findUserByRoleId()
        })
      },
      _findUserByRoleId(){
        findUserByRoleId(this.roleId).then(res=>{
          this.userList=res
        })
      }
    }
  }
</script>

<style scoped>

</style>

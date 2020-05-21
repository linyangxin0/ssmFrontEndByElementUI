<template>
  <div class="content">
    <advertisement-top-bar @searchAdvertisement="searchAdvertisement" @findAll="findAll"/>
    <e-advertisement-list :advertisement-list="advertisementList" @delAdvertisement="delAdvertisement"/>
  </div>
</template>

<script>
  import {advertisementFindAll,advertisementSearch,delAdvertisementById} from "../../network/advertisement";

  import AdvertisementTopBar from "./childComponents/advertisementTopBar";
  import EAdvertisementList from "./childComponents/EAdvertisementList";
  export default {
    name: "advertisement",
    components: {EAdvertisementList, AdvertisementTopBar},
    data(){
      return{
        advertisementList:[]
      }
    },
    created() {
      this._advertisementFindAll()
    },
    methods:{
      _advertisementFindAll(){
        advertisementFindAll().then(res=>{
          this.advertisementList=res
        })
      },
      searchAdvertisement(searchText){
        advertisementSearch(searchText).then(res=>{
          this.advertisementList=res
        })
      },
      findAll(){
        this._advertisementFindAll()
      },
      delAdvertisement(id){
        delAdvertisementById(id).then(res=>{
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this._advertisementFindAll()
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

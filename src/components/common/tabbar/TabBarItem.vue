<template>
  <div class="tab-bar-item-content">
    <div class="title">
      <img src="~assets/img/title-icon.png" class="title-img">
      <span class="title-text">{{title}}</span>
      <img v-if="!isActive" src="~assets/img/arrow.png" class="title-right-img">
      <img v-if="isActive" src="~assets/img/down-arrow.png" class="title-right-img">
    </div>
<!--    :path="pathStr[index]"-->
    <div v-if="isActive">
      <div v-for="(item,index) in smallTitles" class="small-title" @click="itemClick(index)" :class="{itemActive:currentIndex2===index}">
        <router-link :to="pathStr[index]" class="router-dec">
          <img src="~assets/img/small-title-icon.png" class="small-title-img">
          <span :class="{active:currentIndex2===index}" class="small-title-text" >{{item}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      title:'',
      smallTitles:{
        default(){
          return[];
        }
      },
      isActive:false,
      pathStr:{
        default(){
          return[];
        }
      },
    },
    data(){
      return{
        currentIndex2:-1
      }
    },
    computed:{

    },
    methods:{
      currentIndex2Init(){
        this.currentIndex2=-1
      },
      itemClick(index){
        this.$emit("itemClick")
        this.currentIndex2=index
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item-content{
    margin-top: 5px;
    padding-top: 5px;
  }

  .title{
    margin-bottom: 10px;
    cursor: pointer;
  }

  .title-img{
    width: 14px;
    height: 14px;
  }

  .small-title-img{
    position: relative;
    top: 5px;

    width: 20px;
    height: 20px;
  }

  .title-text{
    margin-left: 15px;
  }

  .small-title{
    padding: 10px;
    margin-left: 15px;
    cursor: pointer;
  }

  .small-title-text{
    margin-left: 10px;
  }

  .router-dec{
    text-decoration: none;
    color: #707070;
  }

  .active{
    padding-right: 5px;
    color: #00BFFF;
  }

  .itemActive{
    border-right: 2px solid #00BFFF;
  }

  .title-right-img{
    width: 10px;
    height: 10px;

    position: relative;
    left: 40px;
  }

</style>

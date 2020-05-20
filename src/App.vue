<template>
  <div id="app">
    <div class="content">
        <router-view/>
    </div>
<!--    <main-tab-bar />-->
    <menu-bar v-if="$route.meta.showTab"/>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/MainTabBar/MainTabBar";
  import MenuBar from "./components/content/MenuBar/MenuBar";
  export default {
    components: {MenuBar, MainTabBar}
  }
</script>


<style>
  @import "./assets/css/base.css";

  .content{
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;

    width: 85%;
  }

</style>


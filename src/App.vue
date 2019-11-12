<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.flag"/>
    <Login v-if="!$route.meta.flag"/>
  </div>
</template>
<script>
import TabBar from "./common/components/tabBar"
import Login from "./pages/login"
export default {
    name:"App",
    components:{
      TabBar,
      Login
    }
};
</script>
<style lang="scss">
  .page{
    height:100%;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
  }
</style>

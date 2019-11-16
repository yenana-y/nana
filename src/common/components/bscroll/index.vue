<template>
  <div class="scroll_container">
    <div class="scroll_loading" v-if="loadingFlag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Scroll from "better-scroll";
export default {
  name: "Nana-scroll",
  data(){
    return{
      loadingFlag:false
    }
  },
  mounted() {
    this.scroll = new Scroll(this.$refs.wrapper, {
      ////开启下拉刷新
      pullDownRefresh: true,
      ////开启上拉加载更多
      pullUpLoad: true, 
      tap:true,
      click:true,
      // freeScroll: true,
      scrollX: true,
      ///scroll 事件配置项 主要解决下拉触碰页面加载
      probeType:1
    });
  },
  methods: {
    handleScroll(){
      // this.scroll.on("scroll",this.handleScrollCb)
      this.scroll.on("scroll",this.handleScrollCb)
    },
    handleScrollCb({y}){
        if(y>50){
          
          this.loadingFlag=true;
          //console.log(12314)
          //this.scroll.off("scroll",this.handleScrollCb)
        }
    },
    ////下拉刷新
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
         //console.log(123);
         callback()
      });
    },
    handlefinishPullDown() {
      /////通知better-scroll进行下一次下拉刷新
      this.scroll.finishPullDown();
      ////重新计算better-scroll;
      this.scroll.refresh();
      //this.loadingFlag=false;
      setTimeout(()=>{
        this.loadingFlag=false;
      },1000)
    },
    //上拉加载更多
    handlepullingUp(callback){
      this.scroll.on("pullingUp",()=>{
          callback();
      })
    },
    handlefinishPullUp(){
      //通过better-scroll可以进行下一次加载
      this.scroll.finishPullUp();
      //重新计算better-scroll
      this.scroll.refresh();
    }
  }

};
</script>
  
<style>
  .wrapper,.scroll_container{
    height:100%;
    overflow: hidden;
  }
  .scroll_loading{
    margin-top:0.1rem;
    display:flex;
    justify-content: center;
    align-content: center;
    font-size:0.25rem;
  }
</style>
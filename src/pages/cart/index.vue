<template>
  <div class="cart">
    <div class="header">
      <div class="back" v-on:click="back">&lt;</div>
      <span class="title">购物车</span>
    </div>
    <div class="shoperBox">
      <van-card
      v-for="(item,index) in shopList" :key="index"
        :num="item.n"
        :price="item.price"
        :desc="item.content"
        :title="item.name"
        :thumb="item.img"
      >
      <div slot="footer">        
<van-checkbox v-model="checked">选择</van-checkbox>
<van-button size="mini" @click="jian()">-</van-button>
    <input type="text" style="width:0.5rem;text-align:center;" v-model="num">
    <van-button size="mini" style="margin-left:0" @click="add()">+</van-button>
    <van-button size="mini">删除</van-button>
  </div>
      </van-card>
    </div>
    <van-submit-bar
  :price="3050"
  button-text="提交订单"
  style="margin-bottom:0.5rem;"
>
<van-checkbox v-model="checked">全选</van-checkbox>
</van-submit-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { Card } from "vant";

Vue.use(Card);
import { Button } from "vant";

Vue.use(Button);
import { Checkbox } from "vant";

Vue.use(Checkbox);
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
export default {
  name: "Cart",
  data(){
    return {
      shopList:[],
      checked:"",
      num:1
    }
  },
  created(){
      this.shopList=JSON.parse(localStorage.getItem("list"));
      //  console.log(this.shopList.length);
      if(!this.shopList){
             this.shopList=[];
        }
  },
  methods:{
     back() {
      this.$router.go(-1); //返回上一层
    },
    jian(){
      if(this.num>1){
        this.num--;
      }else{
        this.num=1;
      }
    },
    add(){
      this.num++;
    }
  }
};
</script>

<style scoped>
.cart {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.header {
  width: 100%;
  height: 0.45rem;
  position: relative;
  background: #fff;
}
.back {
  position: absolute;
  width: 0.46rem;
  height: 0.46rem;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.2rem;
  position: absolute;
  top: 0;
  left: 0;
}

.title {
  width: 100%;
  display: flex;
  height: 0.46rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  font-size: 0.16rem;
  font-weight: 550;
  color: #000;
}
</style>
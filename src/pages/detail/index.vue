<template>
    <div class="page">
        <div class="select">
            <div class="back" v-on:click="back">&lt;</div>
            <div class="title">{{name}}</div>
        </div>
        <div class="list" style="background:#fff">
            <div class="list_con" style="background:#fff">商品</div>
            <div class="list_con" style="background:#fff">详情</div>
            <div class="list_con" style="background:#fff">评价</div>
        </div>
        <div class="banner" :data-id=id>
            <img :src=img alt />
        </div>
        <div class="_title">
            <span>{{auto}}</span>
            <span>{{content}}</span>
        </div>
        <div class="pyl">
            <span>￥{{price}}</span>
            <div class="tz">降价通知</div>
        </div>
        <div class="lj">
            <span>领卷</span>
            <div class="ico">满288减20</div>
            <div class="ico">满500减60</div>
            <div class="gd">
                <img src="img/shenglvehao.png" alt />
            </div>
        </div>
        <div class="num">
            <span>数量</span>
            <div class="num_con">
                <div class="jian">-</div>
                <input type="text" id="n_c" value="1" />
                <div class="add">+</div>
            </div>
        </div>
        <div class="place">
            <div class="dd">
                送至 上海市
                <p>有货</p>
            </div>
            <div class="you iconfont">&#xe688;</div>
        </div>
        
        <div style="height:0.4rem;width:100%;"></div>
       <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服"/>
  <van-goods-action-icon icon="cart-o" text="购物车" />
  <van-goods-action-button type="warning" text="加入购物车"/>
  <van-goods-action-button type="danger" text="立即购买"/>
</van-goods-action>
      
    </div>
</template>
<script>
import Vue from 'vue';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

export default {
    name:"Detail",
    // props:["id","nm"],
    created(){
         let {id,name,price,img,auto,content} = this.$route.params;
         this.id=id;
         this.name=name;
         this.price=price;
         this.img=img;
         this.auto=auto;
         this.content=content;
    },
    data(){
        return {
            id:"",
            name:"",
            price:"",
            img:"",
            auto:"",
            content:"",
        }
    },
    methods:{
        back(){
        this.$router.go(-1);//返回上一层
    },
    }

}
</script>
<style scoped>
    *{
            margin: 0;
            padding: 0;
        }
        html{
            font-size: 26.67vw;
        }
        html,
        body,
        .page {
            height: 100%;
        }

        .page {
            overflow: auto;
        }

        .select {
            width: 100%;
            height: 0.46rem;
            position: fixed;
            top: 0;
            background: #fff;
            left: 0;
            width: 100%;
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

        .list {
            /* position: -webkit-sticky; */
            /* box-sizing: border-box; */
            position: sticky;
            top: 0;
            height: 0.44rem;
            width: 100%;
            background: #fff;
            margin-top: 0.46rem;
        }

        .list .list_con {
            width: 33.3%;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 0.44rem;
            font-size: 0.14rem;
            background: #fff;
        }

        .banner {
            height: 3.75rem;
        }

        .banner img {
            width: 3.75rem;
            height: 3.75rem;
        }

        ._title {
            height: 0.9rem;
            padding: 0.1rem 0.15rem;
            position: relative;
            border-bottom: 1px solid #f5f5f5;
        }

        .gz {
            position: absolute;
            top: 0.1rem;
            right: 0.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 0.28rem;
            height: 0.28rem;
            font-size: 0.14rem;
        }

        ._title span {
            display: block;
            font-size: 0.14rem;
            padding-top: 0.05rem;
            color: #000;
        }

        .gz img {
            width: 0.14rem;
            height: 0.14rem;
        }

        .pyl {
            height: 0.44rem;
            padding: 0.1rem 0.15rem;
            position: relative;
            border-bottom: 1px solid #f5f5f5;
        }

        .pyl span {
            display: block;
            font-size: 0.14rem;
            padding-top: 0.05rem;
            color: #c33;
            font-weight: 551;
        }

        .tz {
            position: absolute;
            top: 0.1rem;
            right: 0.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 0.6rem;
            height: 0.22rem;
            font-size: 0.12rem;
            border: 0.01rem solid #f5f5f5;
        }

        .lj {
            height: 0.44rem;
            padding: 0.05rem 0.15rem;
            position: relative;
            border-bottom: 1px solid #f5f5f5;
        }

        .lj span {
            display: block;
            font-size: 0.14rem;
            padding-top: 0.05rem;
            color: #000;
            width: 0.5rem;
            float: left;
        }

        .ico {
            float: left;
            width: 0.9rem;
            height: 0.34rem;
            margin-left: 0.1rem;
            /* background: url(img/bj.png) no-repeat; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.14rem;
            border: 0.01rem solid #c33;
            border-radius: 0.05rem;
        }

        .gd {
            position: absolute;
            top: 0.1rem;
            right: 0rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 0.6rem;
            height: 0.22rem;
            font-size: 0.12rem;
        }

        .num {
            height: 0.44rem;
            padding: 0.05rem 0.15rem;
            position: relative;
            border-bottom: 1px solid #f5f5f5;
        }

        .num span {
            display: block;
            font-size: 0.14rem;
            padding-top: 0.05rem;
            width: 0.5rem;
            float: left;
            color: #000;
        }

        .num_con {
            float: left;
            width: 1.2rem;
            height: 0.3rem;
            border-radius: 0.03rem;
            border: 1px solid #d5d5d5;
        }

        .num_con div {
            width: 0.4rem;
            height: 0.3rem;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #n_c {
            display: block;
            width: 0.35rem;
            float: left;
            height: 0.28rem;
            border: none;
            text-align: center;
            border-right: 1px solid #d5d5d5;
            border-left: 1px solid #d5d5d5;
        }

        .place {
            width: 100%;
            height: 0.86rem;
            position: relative;
            border-bottom: 0.01rem solid #f5f5f5;
        }

        .dd {
            width: 3.28rem;
            height: 0.76rem;
            margin-left: 0.15rem;
            margin-top: 0.1rem;
            font-size: 0.14rem;
        }

        .dd p {
            margin-top: 0.2rem;
            color: #c33;
        }

        .you {
            position: absolute;
            right: 0.2rem;
            font-size: 0.18rem;
            top: 0;
        }

        .tip {
            height: 0.8rem;
            padding-left: 0.15rem;
            font-size: 0.14rem;
            color: #333;
        }

        .tip p {
            margin: 0.24rem 0;
            color: #999;
        }

        .buy_tip {
            background: #f8f8f8;
            height: 0.35rem;
        }

        .buy_tip img {
            display: inline;
        }

        .buy_tip li {
            height: 0.35rem;
            line-height: 0.35rem;
            margin-left: 0.1rem;
            float: left;
            color: #666;
            font-size: 0.12rem;
        }

        .pj {
            height: 6.6rem;
            width: 100%;
        }

        .pj .van_cell {
            height: 0.44rem;
            width: 100%;
            padding: 0.1rem 0.15rem;
            position: relative;
            line-height: 0.24rem;
            font-size: 0.14rem;
            color: #333;
            position: relative;
        }

        .pj .van_cell .van_cell_tit {
            height: 0.24rem;
            width: 1.64rem;
            float: left;
            padding: 0;
        }

        .pj .van_cell .van_cell_tit span {
            line-height: 0.24rem;
        }

        .pj .van_cell .van_cell_value {
            height: 0.24rem;
            line-height: 0.24rem;
            width: 1.64rem;
            text-align: right;
            float: left;
            padding: 0;
        }

        .pj .van_cell .van_cell_value span {
            color: #fb223e;
            padding-left: 0.05rem;
        }

        .pj .van_cell i {
            position: absolute;
            height: 0.12rem;
            width: 0.12rem;
            /* background: url("../img/7.png") no-repeat; */
            right: 0.15rem;
            top: 0.15rem;
        }

        .pj .pj_list {
            height: 5.6rem;
            width: 100%;
        }

        .pj .pj_list li {
            height: 1.12rem;
            width: 100%;
            border-top: #ccc 1px solid;
            padding: 0.05rem;
        }

        .pj .pj_list li .left {
            float: left;
            width: 0.5rem;
            height: 0.57rem;
        }

        .pj .pj_list li .left img {
            height: 0.55rem;
            width: 0.55rem;
            padding: 0.1rem;
        }

        .pj .pj_list li .right {
            width: 80%;
            height: 1.01rem;
            margin-left: 0.1rem;
            float: left;
        }

        .pj .pj_list li .right p {
            margin: 0.14rem 0;
            height: 0.14rem;
            font-size: 0.14rem;
            line-height: 0.14rem;
            color: #666;
        }

        .pj .pj_list li .right p b {
            font-size: 0.12rem;
            padding: 0.02rem 0.15rem;
            margin-left: 0.15rem;
            color: #fff;
            border-radius: 0.05rem;
            background: #ff7f00;
        }

        .pj .pj_list li .right div {
            height: 0.17rem;
            font-size: 0.14rem;
            color: #999;
        }

        .pj .pj_list li .right div img {
            height: 0.15rem;
            width: 0.15rem;
            float: left;
        }

        .pj .pj_list li .right div span {
            float: right;
        }

        .pj .large {
            height: 0.5rem;
            border: 1px solid #e5e5e5;
            margin: 0.05rem 0.05rem;
            width: 96%;
            line-height: 0.48rem;
            background: #fff;
            color: #000;
        }

        .pj .large span {
            color: #333;
            font-size: 0.16rem;
            text-align: center;
            position: relative;
        }

        .pj .large span img {
            /*background: url("../img/7.png") no-repeat;*/
            position: absolute;
            top: 0.02rem;
            right: -0.18rem;
            height: 0.15rem;
            width: 0.1rem;
        }

        .van_warp {
            height: 0.44rem;
            width: 100%;
            display: flex;
        }

        .van_warp .van_tab {
            height: 0.44rem;
            width: 1.25rem;
            padding: 0 0.05rem;
            border-right: 1px #cccccc solid;
            color: #333;
            font-size: 0.14rem;
            line-height: 0.44rem;
            text-align: center;
        }

        .good_info {
            width: 100%;
            padding-bottom: 0.5rem;
            /*margin-bottom:0.5rem;*/
        }

        .good_info img {
            height: 3.75rem;
            width: 100%;
        }

        .footer {
            height: 0.5rem;
            width: 100%;
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            background: #fff;
        }

        .footer a {
            font-size: 0.1rem;
            color: #666;
            height: 0.5rem;
            width: 30%;
            border-left: 1px solid #ddd;
            border-top: 1px solid #ddd;
            text-align: center;
            display: flex;
            flex-direction: column;
            padding: 0.05rem 0;
            position: relative;
        }

        .footer a i {
            font-size: 0.2rem;
            margin: 0 auto 0.05rem;
        }

        .car b {
            height: 0.14rem;
            width: 0.14rem;
            border-radius: 50%;
            background: red;
            color: #fff;
            position: absolute;
            top: 0;
            right: 0.08rem;
        }

        .footer .add {
            height: 0.5rem;
            line-height: 0.5rem;
            width: 35%;
            background: #f85;
            color: #fff;
            font-size: 0.16rem;
            line-height: 0.5rem;
            text-align: center;
        }

        .footer .buy {
            height: 0.5rem;
            width: 35%;
            background: #f44;
            color: #fff;
            line-height: 0.5rem;
            text-align: center;
            font-size: 0.16rem;
        }
</style>
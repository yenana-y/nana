<template>
  <!-- 这是头部哦  -->
  <div class="header">
    <div class="box">
      <img
        src="data:image/png;base64,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"
        alt
      />
      <div class="find">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAAPFBMVEUAAACampqampqampqkpKSampqZmZmZmZmZmZmampqZmZmbm5uampqZmZmampqgoKCZmZmZmZmZmZmZmZnxEDpHAAAAE3RSTlMAQtiKCszp8+K/dmtTPCYVhe+oUAggIwAAALpJREFUKM+FU9kOwyAMg3BTCm39//86jU1NT+IXhGxicinGbBKFQMnM6gE2e+zw2V75EgEyulpbtSEgljO/AE7zVTtgOfIbMKkTJmA7vl/11VOvHKMAzLMCKP//R45/dom/XDKceoRD7qdng6uJ7/UDqRcQvjU1MI/sTiV2uHukHqe+CWp3D7BvAosgCkQL8ZNimmKhpFKLzRLbLQ2MMHK+jYd2BbXh2DcCteHidMVg9brCqeHyNkdKxAeG9gwGFxIALwAAAABJRU5ErkJggg=="
          alt
        />
        <router-link tag="input" to="/search" type="text" value="商品名称 作者 出版社 ISBN"></router-link>
      </div>
    </div>
    <!-- 是轮播图啊 -->
    <div class="pic">
      <img src="https://img0.kfzimg.com/operation/65/0a/650ae1226aa65d8d0ee501b28df9a965.jpg" alt />
    </div>
    <!-- 循环图标 -->
    <div class="nav">
      <ul>
        <!-- <router-link
        tag="li" to="/search">-->
        <li>
          <img
            src="https://img0.kfzimg.com/operation/7e/67/7e67ee755c4751b08ca2cf4f6c167b5a.png"
            alt
          />
          <p>线装古籍</p>
        </li>
        <!-- </router-link> -->
        <li>
          <img
            src="https://img0.kfzimg.com/operation/68/78/6878c2adf90826c96b06689d4d0e9ad8.png"
            alt
          />
          <p>民国旧书</p>
        </li>
        <li>
          <img
            src="https://img0.kfzimg.com/operation/96/79/9679391cb144b9da2d5934baf7798bb3.png"
            alt
          />
          <p>名人墨迹</p>
        </li>
        <li>
          <img
            src="https://img0.kfzimg.com/operation/87/37/873758d4bbdf66f53e4aa444b7489756.png"
            alt
          />
          <p>古玩杂项</p>
        </li>
        <li>
          <img
            src="https://img0.kfzimg.com/operation/0d/f9/0df9dbd219fbe285efb7412b4649290f.png"
            alt
          />
          <p>全部分类</p>
        </li>
      </ul>
    </div>
    <div class="data">
      <div class="data_box" v-for="item in firstList" :key="item.confId">
        <div class="book">
          <p>{{item.title}}</p>
          <p>{{item.subTitle}}</p>
        </div>
        <div class="pic1">
          <img :src="item.imgUrl" />
        </div>
      </div>
    </div>
    <div class="data">
      <div class="data_box" v-for="item in twoList" :key="item.confId">
        <div class="book">
          <p>{{item.title}}</p>
          <p>{{item.subTitle}}</p>
        </div>
        <div class="pic1">
          <img :src="item.imgUrl" />
        </div>
      </div>
    </div>
    <div class="null"></div>
    <div class="auction">
      <span>拍卖</span>
    </div>
    <div class="inner">
      <div class="inner1" v-for="item in pai" :key="item.confid">
        <div class="book">
          <p>{{item.title}}</p>
          <p>{{item.subTitle}}</p>
          <img :src="item.imgUrl"/>
        </div>
      </div>
      <div class="data_box2" v-for="item in yi" :key="item.confid">
        <div class="book">
          <p>{{item.title}}</p>
          <p>{{item.subTitle}}</p>
        </div>
        <div class="pic1">
          <img :src="item.imgUrl"/>
        </div>
      </div>
      <div class="data_box2">
        <div class="book">
          <p>低价拍卖</p>
          <p>1元起拍捡漏</p>
        </div>
        <div class="pic1">
          <img
            src="https://img0.kfzimg.com/operation/6a/e3/6ae3e6b33782dfc51821271ac628a3af.png"
            alt
          />
        </div>
      </div>
    </div>
    <div class="data">
      <div class="data_box">
        <div class="book">
          <p>珍本拍卖</p>
          <p>古籍善本</p>
        </div>
        <div class="pic1">
          <img
            src="https://img0.kfzimg.com/operation/4b/e7/4be7d7aabe1d8188411e178c60fb4651.png"
            alt
          />
        </div>
      </div>
      <div class="data_box1">
        <div class="book">
          <p>今日热点</p>
          <p>每日必看</p>
        </div>
        <div class="pic1">
          <img
            src="https://img0.kfzimg.com/operation/bf/10/bf109d68796166dc526cd72123571f11.png"
            alt
          />
        </div>
      </div>
    </div>
    <div class="data">
      <div class="data_box">
        <div class="book">
          <p>大众拍卖</p>
          <p>大家都在拍</p>
        </div>
        <div class="pic1">
          <img
            src="https://img0.kfzimg.com/operation/2a/f0/2af0cd06e0886d1af2ec3419d468415f.png"
            alt
          />
        </div>
      </div>
      <div class="data_box1">
        <div class="book">
          <p>三天热点</p>
          <p>热拍推荐</p>
        </div>
        <div class="pic1">
          <img
            src="https://img0.kfzimg.com/operation/7d/ec/7dec8863d15871dfa80e06862635e9fb.png"
            alt
          />
        </div>
      </div>
    </div>
    <div class="null"></div>
    <div class="auction">
      <span>好友推荐</span>
      <span class="g1">更多></span>
    </div>
  </div>
</template>

<script>
import { firstApi } from "../../api/firstbook";
export default {
  name: "Firstbook",
  data() {
    return {
      firstList: [],
      twoList: [],
      pai: [],
      yi:[]
    };
  },
  created() {
    this.handleGetFirstList(1);
    this.handleGetsecondList(2);
  },
  methods: {
    async handleGetFirstList(cityId) {
      let data = await firstApi(cityId);

      this.firstList = data.result.list[0].data;
      this.twoList = data.result.list[1].data;
      this.pai = data.result.list[2].data;
      this.pai = data.result.list[2].data;
      console.log(data);
    },
    
    async handleGetsecondList(cityId) {
      let data = await firstApi(cityId);
     console.log(data)
      // this.yi = data.result.list[0].data;
      //  this.yi=data.result.list[1].data;
      //  this.pai=data.result.list[2].data;
      // console.log(data);
    }
  }
};
</script>

<style>
/* 这是头部哦 */
.header {
  height: 100%;
  width: 100%;
}
.box {
  height: 0.58rem;
}
.box img {
  width: 0.34rem;
  height: 0.34rem;
  margin-left: 0.12rem;
  margin-top: 0.12rem;
  float: left;
}
.find {
  width: 3.04rem;
  height: 0.34rem;
  float: right;
  margin-top: 0.12rem;
  margin-right: 0.1rem;
  position: relative;
}
.find input {
  font-size: 0.14rem;
  width: 2.5rem;
  height: 0.34rem;
  line-height: 0.34rem;
  margin-left: 0.1rem;
  padding-left: 0.3rem;
  color: #aaaaaa;
  border-radius: 0.15rem;
  border: 1px solid #ccc;
}
.find img {
  position: absolute;
  width: 0.16rem;
  height: 0.16rem;
  top: 0;
  left: 0.04rem;
}
/* 是轮播图啊 */
.pic {
  height: 1.6rem;
}
.pic img {
  width: 100%;
  height: 100%;
}
/* 切换图片 */
.nav {
  width: 3.45rem;
  height: 1.19rem;
  margin: 0 auto;
}
.nav ul {
  width: 3.45rem;
  height: 0.77rem;
  margin: 0 auto;
  margin-top: 0.1rem;
  float: left;
}
.nav ul li {
  width: 0.69rem;
  height: 0.63rem;
  margin-top: 0.13rem;
  float: left;
}
.nav ul li img {
  width: 0.44rem;
  height: 0.44rem;
  margin: 0 auto;
}
.nav ul li p {
  text-align: center;
  padding-top: 0.03rem;
}
/* 今日上新 */
.data {
  width: 3.45rem;
  height: 0.69rem;
  margin: 0 auto;
  margin-bottom: 0.08rem;
}
.data .data_box {
  width: 1.71rem;
  height: 0.66rem;
  float: left;
  background: #fafafa;
  margin-top: 5px;
}
.data .data_box1 {
  width: 1.71rem;
  height: 0.66rem;
  float: right;
  background: #fafafa;
  margin-top: 5px;
}
.book {
  width: 0.9rem;
  height: 0.41rem;
  float: left;
  margin-top: 0.13rem;
  margin-left: 0.1rem;
}
.book :first-child {
  font-size: 0.15rem;
  color: #333;
  padding-bottom: 0.1rem;
}
.pic1 img {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
}
.null {
  width: 100%;
  min-height: 0.2rem;
  border-bottom: 8px solid #f3f3f3;
}
.auction {
  height: 0.66rem;
}
.auction span {
  font-size: 0.21rem;
  font-weight: bold;
  line-height: 0.66rem;
  padding-left: 0.3rem;
}
.inner {
  width: 3.45rem;
  height: 1.35rem;
  margin: 0 auto;
}
.inner .inner1 {
  width: 1.71rem;
  height: 1.35rem;
  background: #fafafa;
  float: left;
  margin-right: 0.02rem;
}
.inner .inner1 .book img {
  width: 1.51rem;
  height: 0.69rem;
  padding-top: 0.15rem;
  float: left;
}
.inner .data_box2 {
  width: 1.64rem;
  height: 0.66rem;
  float: left;
  background: #fafafa;
  margin-bottom: 0.03rem;
}
.auction .g1 {
  font-size: 0.14rem;
  color: #365899;
  line-height: 0.66rem;
  padding-left: 2rem;
}
.auction img {
  width: 0.2rem;
  height: 0.2rem;
}
.sev {
  width: 100%;
  min-height: 2.12rem;
  overflow-x: scroll;
}
.sev_ton {
  width: 10rem;
  height: 100%;
  overflow-x: auto;
  display: flex;
}
.kuang {
  width: 1rem;
  height: 2.12rem;
  margin-left: 0.15rem;
  display: flex;
  flex-direction: column;
}
.kuang img {
  width: 0.94rem;
  height: 1.4rem;
}
.kuang .title {
  width: 1rem;
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.13rem;
  color: #262626;
  overflow: hidden;
  margin-top: 0.08rem;
}
.kuang .author {
  width: 1rem;
  height: 0.1.5rem;
  line-height: 0.1.5rem;
  font-size: 0.11rem;
  color: #999;
  overflow: hidden;
  margin-top: 0.04rem;
}
.kuang .price {
  display: block;
}
.kuang .price span:first-child {
  font-size: 0.12rem;
  color: #9e100e;
}
.kuang .price span:nth-child(2) {
  font-size: 0.15rem;
  color: #9e100e;
}
.kuang .price span:nth-child(3) {
  font-size: 0.12rem;
  color: #999;
  margin-left: 0.02rem;
}
.one {
  width: 100%;
  min-height: 2.04rem;
  overflow-x: scroll;
}
.one .one_big {
  width: 10rem;
  height: 2.04rem;
  overflow-x: auto;
  display: flex;
}
.one .one_big .one2 {
  width: 3.45rem;
  height: 2.04rem;
  margin-left: 0.15rem;
  border: 1px solid #ccc;
}
.one .one_big .one2 img {
  width: 3.35rem;
  height: 1.55rem;
}
.one .one_big .one2 p {
  width: 3.15rem;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.13rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0.04rem auto 0;
}
.more {
  min-width: 1.2rem;
  height: 2.04rem;
  /* display:flex; */
  background: #fafafa;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  box-shadow: inset 0 0 0 1px #f3f3f3;
  border-radius: 0.08rem;
}
.more .book {
  width: 100%;
  height: 1.55rem;
  line-height: 1.5rem;
  text-align: center;
  font-size: 0;
}
.more .book p {
  width: 0.72rem;
  height: 0.15rem;
  font-size: 0.15rem;
  color: #262626;
  text-align: center;
  padding-left: 0.15rem;
}
.newSquareBox_list {
  width: 100%;
  min-height: 4.5rem;
}
.newSquareBox_list .inner {
  width: 3.45rem;
  height: 4.5rem;
  margin: 0 auto;
}
.newSquareBox_list .inner li {
  width: 3.45rem;
  height: 1.5rem;
  position: relative;
  display: flex;
}
.newSquareBox_list .inner li .i {
  width: 1rem;
  height: 1.4rem;
  margin-right: 0.3rem;
}
.newSquareBox_list .inner li .i img {
  width: 1rem;
  height: 0.67rem;
  padding-top: 0.33rem;
}
.newSquareBox_list .inner li .i .l1 {
  width: 1rem;
  height: 1.26rem;
}
.newSquareBox_list .inner li .i .l2 {
  width: 1rem;
  height: 1rem;
  padding-top: 0.2rem;
}
.newSquareBox_list .inner li .i .l3 {
  width: 1rem;
  height: 1.4rem;
  padding-top: 0;
}
.newSquareBox_list .inner li .price {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0.35rem;
  min-width: 0.56rem;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  background: rgba(158, 16, 14, 0.8);
  color: #fff;
  padding: 0 0.07rem 0 0.02rem;
  border-radius: 0 0.35rem 0.35rem 0;
}
.newSquareBox_list .inner li .r {
  width: 2.3rem;
  height: 1.5rem;
  border-bottom: 1px solid #f3f3f3;
  overflow: hidden;
}
.newSquareBox_list .inner li .r .title {
  width: 100%;
  height: 0.21rem;
  line-height: 0.21rem;
  font-size: 0.15rem;
  font-weight: 700;
  color: #262626;
  margin-top: 0.1rem;
  overflow: hidden;
}
.newSquareBox_list .inner li .r .desc {
  width: 100%;
  height: 0.36rem;
  font-size: 0.12rem;
  color: #999;
  text-align: justify;
  line-height: 0.18rem;
  margin-top: 0.1rem;
  overflow: hidden;
}
.newSquareBox_list .inner li .r .author {
  color: #999;
  text-align: justify;
}
.newSquareBox_list .inner li .r .sign_box {
  margin-top: 0.2rem;
  font-size: 0;
  height: 0.22rem;
  overflow: hidden;
}
.newSquareBox_list .inner li .r .sign_box span {
  position: relative;
  display: inline-block;
  width: auto;
  height: 0.22rem;
  text-align: center;
  line-height: 0.21rem;
  padding: 0 0.08rem;
  font-size: 0.12rem;
  color: #997f55;
  background-size: 100% 100%;
  margin-right: 0.14rem;
  border: 1px solid rgba(153, 127, 85, 0.6);
  border-radius: 0.04rem;
  margin-bottom: 0.5rem;
}
.newSquareBox_list .inner li .r .sign_box span .jiao {
  width: 0;
  height: 0;
  border-bottom: 0.16rem solid rgba(153, 127, 85, 0.6);
  border-left: 0.16rem solid transparent;
  position: absolute;
  right: -1px;
  bottom: -1px;
}
.newSquareBox_list .inner li .r .sign_box span .jiao .jiao_inner {
  width: 0;
  height: 0;
  border-bottom: 0.14rem solid #fff;
  border-left: 0.14rem solid transparent;
  position: absolute;
  right: 0;
  bottom: -0.16rem;
}
.huan {
  width: 100%;
  min-height: 0.55rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /* height: .2rem; */
  /* line-height: .2rem; */
  margin-top: 0.2rem;
}
.huan img {
  width: 0.2rem;
  height: 0.2rem;
}
</style>
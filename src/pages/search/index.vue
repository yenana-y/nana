<template>
  <div class="search">
    <div class="search_box">
      <div class="search_content">
        <input type="text" placeholder="商品名称 作者 出版社 ISBN" v-model="value" />
      </div>
      <div class="qu">
        <span>取消</span>
      </div>
    </div>
    <div class="searchList">
      <ul>
        <li v-for="(item,index) in searchData" :key="index">{{item}}</li>
      </ul>
    </div>
    <van-tabs v-model="active">
  <van-tab title="商品">
    <div class="search_from">
      <div class="search_title">
        <span>热门搜索</span>
      </div>
      <ul class="list">
        <li v-for="(item,index) in searchListOne" :key="index">{{item.keyword}}</li>       
      </ul>
    </div>
  </van-tab>
  <van-tab title="书目">
    <div class="search_from">
      <div class="search_title">
        <span>热门搜索</span>
      </div>
      <ul class="list">
        <li v-for="(item,index) in searchListOne" :key="index">{{item.keyword}}</li>       
      </ul>
    </div>
  </van-tab>
  <van-tab title="拍卖">
    <div class="search_from">
      <div class="search_title">
        <span>热门搜索</span>
      </div>
      <ul class="list">
        <li v-for="(item,index) in searchListOne" :key="index">{{item.keyword}}</li>       
      </ul>
    </div>
  </van-tab>
  <van-tab title="店铺">
    <div class="search_from">
      <div class="search_title">
        <span>热门搜索</span>
      </div>
      <ul class="list">
        <li v-for="(item,index) in searchListOne" :key="index">{{item.keyword}}</li>       
      </ul>
    </div>
  </van-tab>
</van-tabs>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);
import { booksSearch } from "../../api/search";
import { booksList } from "../../api/search"
import { async } from 'q';
export default {
  name: "search",
  data() {
    return {
      value: "",
      list: [],
      searchListOne:[],
      searchData: [],
      active: 2,
      
    };
  },
  watch: {
    async value(newVal) {
      //console.log(encodeURIComponent(newVal))
      let val = newVal;
      let data = await booksSearch("wap", val);
      // let booksList=await booksList();
      // this.searchListOne=booksList;
      this.searchData = data.data;
      // this.searchListOne==booksList?booksList:"";
      this.searchData == data.data?data.data:"";
      // console.log(this.searchListOne);
    },
    
  },
  created(){
      this.all();
  },
  methods:{
    async all(){
        let books=await booksList();
        this.searchListOne=books.data.wordList;
        this.searchListOne==books?books:"";
        //console.log(this.searchListOne);
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
}
.search .search_box {
  width: 3.45rem;
  height: 0.5rem;
  margin: 0 auto;
}
.searchList {
  width: 100%;
  min-height: 0.01rem;
  background: #fff;
  position: absolute;
  z-index: 10;
  top: 1rem;
  left: 0;
  overflow: hidden;
  box-shadow: 0 1px 2px #ccc;
}
.searchList ul {
  width: 100%;
  min-height: 0.01rem;
}
.searchList ul li {
  display: block;
  width: 100%;
  height: 0.4rem;
  padding: 0 10px;
  line-height: 0.4rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.search .search_box .search_content {
  display: flex;
  float: left;
  width: 2.7rem;
  height: 0.34rem;
  background: green;
  padding: 0 0.1rem;
  margin-right: 0.15rem;
  border-radius: 0.04rem;
  background: #f7f7f7;
  margin-top: 0.08rem;
}
.search .search_box .search_content input {
  width: 100%;
  height: 0.3rem;
  line-height: 0.21rem;
  font-size: 0.15rem;
  background: #f7f7f7;
  border: none;
  outline: none;
  border-radius: 0.04rem;
  color: #6e6e6e;
}
.search .search_box .qu {
  float: left;
  height: 0.34rem;
  line-height: 0.34rem;
  font-size: 0.16rem;
  color: #262626;
  margin-top: 0.08rem;
}
.search .search_box .qu span {
  padding-top: 0.1rem;
}
.search .nav {
  width: 100%;
  height: 0.4rem;
  border-bottom: 1px solid #ccc;
}
.search .nav .nav_box {
  width: 3rem;
  height: 0.4rem;
  margin: 0 auto;
}
.search .nav .nav_box ul {
  width: 3rem;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 0.4rem;
}
.search .nav .nav_box ul li {
  font-size: 0.18rem;
  color: #262626;
}
/* .search .nav .nav_box .router-link-active{
  color:#c33;
} */
.search .nav .nav_box ul li:first-child {
  color: #9e100e;
  border-bottom: 2px solid #9e100e;
}
.search .nav .nav_box ul li:hover {
  color: #9e100e;
  border-color: #9e100e;
  border-bottom: 2px solid #9e100e;
}
.search .search_from {
  width: 3.35rem;
  height: 1.61rem;
  margin: 0 auto;
  /* margin: 0.2rem; */
}
.search .search_from .search_title {
  width: 3.35rem;
  height: 0.2rem;
}
.search .search_from .search_title span {
  display: block;
  font-size: 0.15rem;
  color: #999999;
  padding-top: 0.15rem;
}
.search .search_from .list {
  width: 3rem;
  height: 1.11rem;
  margin-top: 0.27rem;
}
.search .search_from .list li {
  float: left;
  min-width: 0.59rem;
  height: 0.27rem;
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
  border-radius: 0.04rem;
  font-size: 0.13rem;
  color: #999999;
  background: #fafafa;
  line-height: 0.27rem;
  text-align: center;
}
</style>
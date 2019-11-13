<template>
  <div class="search">
    <div class="search_box">
      <div class="search_content">
        <input type="text" value="商品名称 作者 出版社 ISBN" />
      </div>
      <div class="qu">
        <span>取消</span>
      </div>
    </div>
    <div class="nav">
      <div class="nav_box">
        <ul>
          <li>商品</li>
          <li>数目</li>
          <li>拍卖</li>
          <li>店铺</li>
        </ul>
      </div>
    </div>
    <div class="search_from">
      <div class="search_title">
        <span>热门搜索</span>
      </div>
      <ul class="list">
        <li>日知录</li>
        <li>人间词话</li>
        <li>藏书票</li>
        <li>实寄封</li>
        <li>聂鲁达</li>
        <li>荣宝斋画谱</li>
        <li>黄帝内经素问</li>
        <li>世说新语</li>
        <li>创刊号</li>
        <li>加缪</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"search"
};
</script>

<style>
    .search{
    width:100%;
    height:100%;
}
.search .search_box{
    width:3.45rem;
    height:0.5rem;
    margin:0 auto;
}
.search .search_box .search_content{
    display:flex;
    float:left;
    width:2.7rem;
    height:0.34rem;
    background:green;
    padding: 0 .1rem;
    margin-right: .15rem;
    border-radius: 0.04rem;
    background: #f7f7f7;
    margin-top:0.08rem;
}
.search .search_box .search_content input{
    width: 100%;
    height: .3rem;
    line-height: .21rem;
    font-size: .15rem;
    background: #f7f7f7;
    border: none;
    outline: none;
    border-radius: 0.04rem;
    color:#6e6e6e;
}
.search .search_box .qu{
    float: left;
    height: .34rem;
    line-height: .34rem;
    font-size: .16rem;
    color: #262626;
    margin-top:0.08rem;
}
.search .search_box .qu span{
    padding-top:0.1rem;
}
.search .nav{
    width:100%;
    height:0.4rem;
    border-bottom:1px solid #ccc;
}
.search .nav .nav_box{
    width:3rem;
    height:0.4rem;
    margin:0 auto;
}
.search .nav .nav_box ul{
    width:3rem;
    height:0.4rem;
    display:flex;
    justify-content: space-between;
    text-align: center;
    line-height:0.4rem;
}
.search .nav .nav_box ul li{
    font-size:0.18rem;
    color: #262626;
}
/* .search .nav .nav_box .router-link-active{
  color:#c33;
} */
.search .nav .nav_box ul li:first-child{
    color: #9e100e;
    border-bottom:2px solid #9e100e;
}
.search .nav .nav_box ul li:hover{
    color: #9e100e;
    border-color: #9e100e;
    border-bottom:2px solid #9e100e;
}
.search .search_from{
    width:3.35rem;
    height:1.61rem;
    margin:0 auto;
    margin:0.2rem;
}
.search .search_from .search_title{
    width:3.35rem;
    height:0.2rem;
}
.search .search_from .search_title span{
    display:block;
    font-size: 0.15rem;
    color: #999999;
    padding-top:0.15rem;
}
.search .search_from .list{
    width:3rem;
    height:1.11rem;
    margin-top:0.27rem;
}
.search .search_from .list li{
float: left;
min-width:0.59rem;
height: 0.27rem;
margin-right: .10rem;
margin-bottom: .10rem;
border-radius: 0.04rem;
font-size: .13rem;
color: #999999;
background: #fafafa;
line-height:0.27rem;
text-align:center;
}
</style>
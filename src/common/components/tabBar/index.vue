<template>
  <div id="footer">
     <ul class="inner">
      <router-link tag="li" v-for="item in navs" :key="item.id" :to="item.path">
          <i class="iconfont" v-html="item.icon"></i>
        <span class="name">{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      navs: [
        {
          id: 0,
          text: "首页",
          icon:"&#xe606;",
          path: "/firstbook"
        },
        {
          id: 1,
          text: "书店",
          icon:"&#xe660;",
          path: "/bookshop"
        },
        {
          id: 2,
          text: "拍卖",
          icon:"&#xe610;",
          path: "/sell"
        },
        {
          id: 3,
          text: "购物车",
          icon:"&#xe600;",
          path: "/cart"
        },
        {
          id: 4,
          text: "我的",
          icon:"&#xe612;",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

<style>
/* ///////////底部 */
#footer {
  width:100%;
  height:0.5rem;
  position:fixed;
  bottom:0;
  left:0;
}
#footer .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 0.5rem;
}
#footer .inner li {
  width:0.75rem;
  height:0.43rem;
  text-align: center;
  margin-top:0.05rem;
}
#footer .inner .router-link-active{
  color:#c33;
}
#footer .inner li .img_box .iconfont{
  width: 0.25rem;
  height: 0.25rem;
  font-size: 0;
  line-height: 0;
  margin: 0 auto;
}
#footer .inner li .name {
  margin-top:0.05rem;
  display:block;
  line-height: 0.18rem;
  font-size: 0.11rem;
  color:#000;
}
</style>
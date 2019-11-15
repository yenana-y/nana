<template>
  <div class="page">
    <div class="cart">
      <div class="header">
        <span class="cart1">购物车</span>
        <span class="bian">编辑</span>
        <img
          src=""
          alt
        />
      </div>
      <div class="shop">
          <div class="bar">
              <input type="checkbox" >
              <i class="img "></i>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style scoped>
.cart{
    width:100%;
    height:100%;
     background: #f5f5f5;
}
.header {
  width: 100%;
  height: 0.45rem;
  position: relative;
  background:#fff;
}
.header .cart1 {
  font-size: 0.17rem;
  color: #000;
  line-height: 0.45rem;
  text-align: center;
  padding-left: 1.55rem;
}
.header .bian {
  font-size: 0.17rem;
  color: #000;
  line-height: 0.45rem;
  padding-left: 0.8rem;
}
.header img {
  width: 0.23rem;
  height: 0.23rem;
  position: absolute;
  top: 0.11rem;
  right: 0.15rem;
}
.shop {
  width: 3.5rem;
  height: 2.12rem;
  border-radius: 0.1rem;
  background: green;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.shop .bar{
    width:3.25rem;
    height:0.39rem;
    background:springgreen;
    margin:0 auto;
}
.shop .bar input{
    margin-top:0.12rem;
    margin-left:0.15rem;
}
.shop .bar i{
    width: .17rem;
    height: .17rem;
    background-size: cover;
}
</style>
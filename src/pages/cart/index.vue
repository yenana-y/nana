<template>
  <div class="page">
    <div class="cart">
      <div class="header">
        <span class="cart1">购物车</span>
        <span class="bian">编辑</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAAXNSR0IArs4c6QAAA3lJREFUWAnNmF1oTnEcx8fGRCHy1iwXbKvFciFSJC83FMpbETapCRdukNwhUeQldy4YKReKK0nk5UK7UJK81IpZqDF5ifL+8vls5/909rSt7XnZeb71Oef/+vt9zznPOed/ngFFmWsqUxfAbBgPY2EMjIRP0AbvoBUa4RY8hrxrBhnOwVv4lwHOc75xcq6lRLwLcWMt1BugDuZBNXgmB0V767bXQQM4Pj7feMbNWmVEuA4h+AfKh2EyZCLnOd84IabxzZOR1jPrIxjM39d2GAa5kHGM1wbGN4/5+qQDjA5HepmyN0U+ZFzjh1zm7ZX2M8pJv6AO+kN1JDGfec3fo3bT68CfsLLHkbnvNJ95zb+ru/DTokF/2a/oblCe281rfs3qp5OKqd0Hj+JUp57+r5hfH/rRV0pbKdnxHIalWpMpmF8f+tFXSg8o2bg61ZJsQR/60Ve7atja8B4Gt7ckv9GHfvRVM5DNOlAXwB9sIUgf+lHrNOk7Vt3u2BXMNvip1uSkyNbLgrHXYST4mTSAumu/EeA68DN0q8rKysV0no4G1Dc1NV2LD862Px6Lsp709tkzWQLqd8eux60GJ0YEs/EJ2fbHY/2JKsWadCGqxnXsCmY7IXLSqsnXUaWqF/bqo/HOsZyubPvj8aZElTfu94PPo2NWCkgn8aIv/RXNjSov2Hd6V9qZkLzCzaDJWXqwoQlsWAOFoLWY0I/vcP21y9+SjU+gtL0luY0fcs9AP5viNjQWOg7FOxIoHyWnBr264fGYsuG191np8ympRe8ycodF70zKXWoPrR7Fd1jY5Yj8NS6J8pq/28+HkP4EBQf+gM2hMc/72iifeY/3Jpfv8yPgBDkDoyAfGk7QCxBymbdPqmX0NzDAO9gCQyAXGkyQHWBc43+BDZCRKph1A8KR+p7fC5marWLuQfC1GmL6n5B5spbfxPchBL7Y14gVFRU3ysrKvHNDjIeUvVlyrvlEDI8Iv+rS5dvhJlxN72CtebW8vNzvFpdzc9L7c1kvJZiPJ8+Gi+S4NHgWfCrci3fEyqlXXKwt58WNRNTgo7TILkzOR30ehGc8EXnm3oAm43ei677GqP0r+0WQmPwtadBL6bO0BLaBxmxvgemQmHxEhDtzJ+V90Ayak0swGhKVlzAYiu+f0r483868bL2VK6NVMBRewRW4A57hvOo/UDj8ys4lBggAAAAASUVORK5CYII="
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
  name: "Cart"
};
</script>

<style>
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
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR…GTk9NEO5c/0/LPTWTRA663yJ2kpKRyt9sd1rcWTf5fEvwAsDZkuH5xqjAAAAAASUVORK5CYII=) no-repeat;
    background-size: cover;
}
</style>
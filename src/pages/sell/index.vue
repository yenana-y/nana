<template>
<Nana-scroll ref="scroll">
  <div class="sell">
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
        <p>商品名称 作者 出版社 ISBN</p>
        <img
          class="t1"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAAXNSR0IArs4c6QAAA3lJREFUWAnNmF1oTnEcx8fGRCHy1iwXbKvFciFSJC83FMpbETapCRdukNwhUeQldy4YKReKK0nk5UK7UJK81IpZqDF5ifL+8vls5/909rSt7XnZeb71Oef/+vt9zznPOed/ngFFmWsqUxfAbBgPY2EMjIRP0AbvoBUa4RY8hrxrBhnOwVv4lwHOc75xcq6lRLwLcWMt1BugDuZBNXgmB0V767bXQQM4Pj7feMbNWmVEuA4h+AfKh2EyZCLnOd84IabxzZOR1jPrIxjM39d2GAa5kHGM1wbGN4/5+qQDjA5HepmyN0U+ZFzjh1zm7ZX2M8pJv6AO+kN1JDGfec3fo3bT68CfsLLHkbnvNJ95zb+ru/DTokF/2a/oblCe281rfs3qp5OKqd0Hj+JUp57+r5hfH/rRV0pbKdnxHIalWpMpmF8f+tFXSg8o2bg61ZJsQR/60Ve7atja8B4Gt7ckv9GHfvRVM5DNOlAXwB9sIUgf+lHrNOk7Vt3u2BXMNvip1uSkyNbLgrHXYST4mTSAumu/EeA68DN0q8rKysV0no4G1Dc1NV2LD862Px6Lsp709tkzWQLqd8eux60GJ0YEs/EJ2fbHY/2JKsWadCGqxnXsCmY7IXLSqsnXUaWqF/bqo/HOsZyubPvj8aZElTfu94PPo2NWCkgn8aIv/RXNjSov2Hd6V9qZkLzCzaDJWXqwoQlsWAOFoLWY0I/vcP21y9+SjU+gtL0luY0fcs9AP5viNjQWOg7FOxIoHyWnBr264fGYsuG191np8ympRe8ycodF70zKXWoPrR7Fd1jY5Yj8NS6J8pq/28+HkP4EBQf+gM2hMc/72iifeY/3Jpfv8yPgBDkDoyAfGk7QCxBymbdPqmX0NzDAO9gCQyAXGkyQHWBc43+BDZCRKph1A8KR+p7fC5marWLuQfC1GmL6n5B5spbfxPchBL7Y14gVFRU3ysrKvHNDjIeUvVlyrvlEDI8Iv+rS5dvhJlxN72CtebW8vNzvFpdzc9L7c1kvJZiPJ8+Gi+S4NHgWfCrci3fEyqlXXKwt58WNRNTgo7TILkzOR30ehGc8EXnm3oAm43ei677GqP0r+0WQmPwtadBL6bO0BLaBxmxvgemQmHxEhDtzJ+V90Ayak0swGhKVlzAYiu+f0r483868bL2VK6NVMBRewRW4A57hvOo/UDj8ys4lBggAAAAASUVORK5CYII="
          alt
        />
      </div>
    </div>
    <div class="pic">
      <img src="https://img0.kfzimg.com/operation/46/d9/46d9f280fdc09917df01a6bf3cfcaa86.png" alt />
    </div>
    <div class="nav_box">
      <ul>
        <li>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAAA6FJREFUWAntmU1ME0EUx7dlqYQvTbQmBk+cDGrANqbaeICbMSREYyNgPBiOePGCSaMcq3iAGyGaeJHCoV40hIsx1lgqiYBSLx74OFFsjIaIpLFbWv9v7WyWzbRup19Eu8lj5r3Z+c9vZ+djp0hS9ar2wJ4esOzxDI7T6axNpVIBq9X6GekvQ3FBrsViWYfAZjqddjMhtBNvbW0dDQQCCRYzprIxoPchNgS/p6+3t0cfL0bePzWlylzv79fkKLa6unoegazt5QRGRbm/r0/Si2rqBWbezc9vra2tHTJopwG9nEv6b8Ba3VgsJj2dnKRhkdSCusxcOFz/aGLCYrfbddH8sxgqu7lqmQa+OTAgQSwIe8YTxBi/Njo25r7v89XzyosVMw3c0d6+9XF5eXxpaekFr3GHw/ElLUlneWW8GB5cDV/q7tYXW2RZDuoDxrxpYGPFQn0lkbCSxgW3e1vVslqlUCjUhDfVDv+NGuP8qRiwXFubIh6v19vEuGiVgB1mPi9Vn5JXsF9jIsA0+FywXli43A8mMiQeA/I77CHM9CQr1oOJ9DDB1sFuwH4WC8SsjkgPH4U4bR5R2DmzDWW77/3Cgla0vf1nwdACnIwI8EvoxGAdsJMczbxCD0ZGvrIK8Xjcjg8g7sbE7hEB9mcqv0L6hAmJprcGB9W9nDaSSb9fikajV6H1KZueCDBptcBogQ+RU8jV1dmpVd/Y2KB1WPN5GZFJ1wgh6lkaDhd5oqWMiQBfBtBz2GnYgVLC8bRFgNsgRNP5A4wmYFkvEeC3IKRPyBOwK2WlRWMiwLOoR6cCWofHYWW9RFeJeVCSlf0S6eGyQ+obFO1hvYZQHidy9chhOHFI2OmCuQQrBrybTKrAbrf7BwFasdOF5uaaceI4Bfd1NmjTwAlFqcH2eczlch3niSmK0hKJRA7yyngxduK46/U2s/LMieMI83mpaWD8mNJ4b3h4wmaz7fCEEolEw52hITr2lHRemAZ2OhyW2ZkZYm3gAWdiJYWlNkreQI6HEyqqAgt1Wx6VTI/hPDRN3ZpUFPXt+nw+7VwUCoebsA5/yyVQMeAaWcYvWzgBAFIPiKUzoveN+YoBA0wFzqw8KldmHe6CEzSCMv/fmnTY72vYk+2XNOeQwGs7MzU9XRJW+vWdhOmkzC5qC5OO+4M5u0f9AGGOMfV4PLaVlZXbAK8zlhXqA2wdGpv42FH/KYO3SefDNsQ9i4uLSqH61fr/TQ/8BmKs7ZwH/ykoAAAAAElFTkSuQmCC"
            alt
          />
          <p>线装古籍</p>
        </li>
        <li>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABChJREFUWAntmFtIU3Ecx/9nVydeyvttGtjKvEUWGixKKOlFwQteEscQQx9kBCOoTEIf8iV6CFGKFEVTBK8QQkLsIV96ETQpkUUPTrzgNnWKl7nt9D2CIVN3dtHN4PhyPP/L+X/O9/z+39/vP0K4P04BTgFOAUcK8B11+qqvuLg4ICwsbFIqld6dm5sbOMzBO3xzHv5XKpWJERERLyiKes/n8zPsmQT2Db68Lysri7FYLNOLi4uS1NTUN2trazftec4NcF5eXphQKJyFshKxWLy7tbXV2dPTY7IHPhchkZ+ffyE0NFS7sbERYLPZtkQiUUpHR8cve1jmnjqu0ZttzAYLDAz8s7S0FI6NtmE2m5P6+voWTmLwaUgAVhIUFDSLmA3HRjOur69fGR4eNpwEy7T7zNZUKpUYMTuzsLAgjYqKWt7c3JQNDg6uOoJl+nwSww0NDQJ8+h/z8/OXYmJidHt7e4n9/f3rbLBMv9cVRhjwrVbrpE6nuxYXF/cbsMldXV3bzsB6HZhRFrATgE1HFvsJgPT29nazs7BeBYbP+mPBaYRBMmCnjEbjje7ubosrsMxYr8QwwiAWPqsDrAxhoI2Ojr6FmLW6CsuMP3MfrqqqkiNraZAQRP7+/ga4gRSwTses/UudqcK1tbXPAPgtLS1NxOPxdre3t9M9gT0zhRECImStUTjAg6KiItLZ2WlDNpO3tbV9t1fM1ftTz3QoD1NQwIwjGVwsLy8nTU1NBPGrbm1t9RjW1ZdjHY8QqCspKbEODAzQBoOBrq+vp9H2mXWiCwNORWEmBKDiOLJXJiBJbGwsGRsbI0i7K/Hx8QUu8LAO9XjT0TRNhYSETEVGRmY2Njbuw+JYQ0ZGRqw7OztyJAuXvdYRtcfAlZWV11FtXUViICi8CZyANDc3E7yEure3V+tocXf6PPLhmpqaV/BXvUAgsKyurr5Xq9XU0NAQQSGuaWlpue8OENsct4CZEwLq1y+oC7Lgs3RwcLAK0GbUCB+QdidWVlZuu5vJThW4urpaiATwEnVAnVwuF+bk5BC9Xk+gJo1C/Ali9ivqgxm2RT3pd8olKioqLsP4n8OqFNj1otLS0v3NxSwMvyUJCQmUyWTKAGyzJzDOzD0CrFAo7kkkkiQoKUV83kEdkIGMFYhPTeCx/0CZh8PGyOjoKMF5TO/n51ftzIKejjkSw4WFhXFIqx+Xl5cfIkaprKwskp2dTdBG8MPG/npwBaLVaolGo6EBugjgYXTsssCYcBp+B7tbYxnnsPsI8MFopn6FtyqRZh/DqmTMERy2RTGqouqy4TzGw6FxX+WDOWxXPKseX+Q12zhH/ScCHzepoKAgFKo/wq8zbsUqgJ8C+O1xz3a2zSVg5qG5ubkyXPKcXeBgHGBNSN+fULntHLRxV04BTgFOAU6B/0+Bv/vumOtL2jW7AAAAAElFTkSuQmCC"
            alt
          />
          <p>名人墨迹</p>
        </li>
        <li>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABHlJREFUWAntmF1IHFcUx++ss66r2VjXVCl+ZBVttMVAYg2iFARflPiBLtJHLaIkKD6UEEuD2Ie0hL4EWhOEoi99kCAq+GApASOKD9riWt2Hrd+1rrviutGK7or7kf8NLuzIzjize7d92QvDzNx75tzfPXPm3HOGkFiLWeC/sUBOTs7n0ZiJi4bS/Pz8L8/Pzwfj4uJOcXy8srJiZTWPipWigJ7c3Nz7Go3mxcDAAGlvb49XqVR/5OXlZQbGIz3LtrDBYOi+ajKO43Rqtforo9GoHRoaei/e0NDgmZiYcJ6dnb1Ax5mEDv/W1tYPEuPvh2QBwx+/8fv931VVVXl0Op1fTKnP5yOtra1ql8tFAHyu1+u5+vp63ul0+kZGRnxYjOizw8PDaiz4yebm5vdi+mm/LGC80jsej2eBPgDFJDk5mV4ya3Nzc6Snp4fwPH93bW3NJKVYlg9TJXhdnFar3afWY92gn8C6T6+CpfPKAmYNGIm+GHAk1pPzLC9HSExmb2+PzM7Oig1L9iN6EGwqkjKhBpUCC6JKR0eH2+v1OrOysryhlIv1WSyWjIODA29bW5taTEasXymwII6mpKS4saGsdHV13Z2cnFyExQTjlyc9OTlR19bW3unu7jZjoYWXx+XcKwUOqXN7e9vZ39/fmpSUZAspcNF5enp6s7i4+I2UzFVjTIARQ2nQ9y4tLZ0EJszMzDTi+nl2drYdC3q2s7Mzih1TkesEdAWfmQAHK7y4NhQUFDyNj4/XYyEpNputH/2SO1gIHSG7ogWsOT4+vg7L8sjW/OXl5W+RI2hAIOnjIQkvdUZr4/gLIe/nkpKSv9PS0t4iV3iFeS2X5g7rNloWJsg9vsXxywXVelh0IR5iCtzU1BS3vLz8AaqNRIQ4FyoNZqABdmbAyJc5hLVHnZ2d9ciD9XCJf2ZmZl6Ojo6OBSZjcWYCDFhSWFj4dWNjY/PGxoYFPmtGCLuHTeKn/f196+7urg2+7LDb7REzMwEG5LWysjIjIsGfg4ODXyAeb5aWljb39vb+iCplIDU11etwOOzT09O0bhJs70pXwCRKtLS03KioqLiOROg5haUQCQkJrxYWFhYBfAugPrjLJ3V1dc/g2wlKIYPlmQBThQBdRHsdUD41NeW2Wq1OWPzX+fn5irGxsQcZGRkcXEcXkAnnzASYlk0ob8yICo5giPX1dRM+vMcY+zc9Pf03WHw6nJQyWCcTHz48PCRms/kAxeqnwcoBPIJ7nvabTCaCQtZ2dHQULKL4OiJgpIgcUsbE1dVVUllZ+RD++kCKAMAq5MIEcVpNfwmE05QCC77wmpoafnx8/HZfX58bk8t1LzeADdXV1XLlBetSCixIXhB3k3AIFEb7RtEq8XF9SHNf1o3qxCHLeIqA8avJhfyWNS9N/mlBmihHsRLgz6BQK0dpODKwsKxqRAnwtXBAWD+j5P1OIYx58CeSRzXBlMPtpkFGXlP0BRUVFQ0jfpbi9QmihbypxKVQTX8EPy7DTvm7uFRsJGaBmAX+Fwu8AzN9ptY64I9zAAAAAElFTkSuQmCC"
            alt
          />
          <p>名人字画</p>
        </li>
        <li>
          <img
            src="data:image/png;base64,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"
            alt
          />
          <p>古玩杂项</p>
        </li>
        <li>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABGdBTUEAALGPC/xhBQAABIdJREFUWAntWG9IlHcc/92Z5hgeVOrNV5qek5y+qAzGpkzY9IWMhbBzhJjcGTmYLYTaH7dU1LUmY2EWw4UFxUilkupFL3TLXjiM3BC0NpmGvRA8ZbOpM3Hn3T6feu7x7nzyee4v/bkvfLjfn+/38/08v+f37zkhIhYZgcgIhHUEdCHKtgu8OwHyDwK3gafScqHqZ2AU+AE4DfwBsO1N4KkxE5RcBu6npKRYbDbb4ZmZmd8IlpOTk63sAy4B9PXbAp0SW5C5DiiNiYlpHhsbW4iNjT2CutFLkW1paanBZDIZlpeXD6HvR6AB+MvLT7WqV/VQdtiI5sMAX7cYGBj4aHJyci/EnkTVWyxdjOg7BZ+y/v7+KtSZl7HkIJdm81Uw38gegHP0jZaWln147a+lpqZecDqdmWpZ6ZOenn4BMdtaW1sryCFxkVPT29bkJAnhojnOcnFx8bG2trbdOp2uDCJ84ZCooE6ncyD2fGVl5dXu7u7PpI5q/PbLTgoFLcnocx4oxYKyDg4OmhwOB4lfUuDzp+mhXq//LicnZ3xiYoLz+grAaaNoWgSfQ+Srw8PDp4xGYzPKrygyBd44xR0lOzubi3IYKFOiVBO8FUG3sFgOREdHdygRBLttZWXlg6SkpO/By4NnwptfbdG9jYBrEGvxDgxVPSoqirk4LZh7jakJjkPEA0Bpq1pDFqQGTrlZwKDEpyY4BkF2rGj+hsWkXP8hmeL+rCY4LCJ9SfJiCW5vbxfl5eWis7PTY5Cwn4qqqipRXV0tpqamPPpcMR0dodl0PkW2b3CU3pmenna6AyKd6JPR29sr9+MQkNsLCwvl9q6uLrmdsT09PXKfi5u50HcMcJ1+KK7ahtWib6WFhQURF8dN5LHNzc25igJ7qdyH25ncvl6M7KRS8HsOFxUVCbPZLHD6CavVKnJzeXd/bE1NTSItLU1kZmaKuro6V7NgTElJyaMYi8Ui8vLy5D6tBbWTjlNiM17Tu1puY1qTrueHbe1uQkLCNfhw/+fU8DC/R9iDJYyV504wTxw9pgN/w2JSrigkW12tbpnVRvgf+G4Cpt1iQl20STlXtx23jGqC++BbjKc+5xYT0qKU6z0kuaGUSE3wOIJ+wda1f3FxsQIr+G8lkmC0kXt+fr4Cuc6A7yeAudeYmmAG8GnH8Xn0RUFBwQF8zrSAPGhzmlzkBPfH2LvbkaseKAUUTYtgHqe8VH84NDRUEx8fv72xsdGMOv8UCdQu1dfXm8kJbh7FBcDXgONJxGoHh3ccH5DiG4EbuBtczM/P/wTl1wFfbKCvr68Zp977CMoHaoGzwBOFou+R+SrYFfcyCvxYPAicHhkZuZuYmMikqcB6dg+XnIasrCz+h7EPOAF8C/wLaDJ/BbvI+TnD0d5tMBiOjo6OboDVYKVzK5QN83TWbrcfzcjIsOOS9Dk6rgJHAM+7pxwR+kIWUlwHxvCZXoq7Ry3wu4RatqHvT8mHvn5boCPsnfgdNHwF8HvsJkD+t4CHwJdALxCQBVuwSwxF7gDI/ytA8RGLjEBkBJ7FEfgfVtmV5iMNvBUAAAAASUVORK5CYII="
            alt
          />
          <p>全部分类</p>
        </li>
      </ul>
    </div>
    <div class="action">
      <div class="s">
        <div class="left">
          <div class="title">全部拍卖</div>
          <div class="num">667500件</div>
          <img src="http://www.kongfz.cn/images/app/indexarea_2/quanbu.png" alt />
        </div>
        <div class="left">
          <div class="title">艺术品专场</div>
          <div class="num">304场</div>
          <img src="http://www.kongfz.cn/images/app/indexarea_2/yishu.png" alt />
        </div>
      </div>
      <div class="x">
        <div class="moudle">
          <div class="kuang">
            <span>珍本拍卖</span>
            <p>259件</p>
            <img src="http://www.kongfz.cn/images/app/indexarea_2/zhenben.png" alt />
          </div>
        </div>
        <div class="moudle">
          <div class="kuang">
            <span>大众拍卖</span>
            <p>35751件</p>
            <img src="http://www.kongfz.cn/images/app/indexarea_2/dazhong.png" alt />
          </div>
        </div>
        <div class="moudle">
          <div class="kuang">
            <span>低价拍卖</span>
            <p>26121件</p>
            <img src="http://www.kongfz.cn/images/app/indexarea_2/dijia.png" alt />
          </div>
        </div>
        <div class="moudle">
          <div class="kuang">
            <span>一价拍卖</span>
            <p>561件</p>
            <img src="http://www.kongfz.cn/images/app/indexarea_2/yikoujia.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="re">
      <div class="l1"></div>
      <span>推荐专场</span>
      <div class="r1"></div>
      <div class="jian">></div>
    </div> 
  </div>
</Nana-scroll>
</template>

<script>

export default {
  name: "Sell",
  data(){
    return{
      sell:[]
    };
  },
  mounted(){
    this.$refs.scroll.handlepullingDown();
    this.$refs.scroll.handleScroll();
  }
};
</script>
    
<style scoped>
.sell {
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 0.52rem;
}
/* ////头部 */
/* ////头部 */
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
  width: 2.5rem;
  height: 0.34rem;
  background: #f5f5f5;
  float: left;
  margin-top: 0.12rem;
  margin-right: 0.1rem;
  border-radius: 0.15rem;
  position: relative;
  margin-left: 0.2rem;
}
.find p {
  font-size: 0.14rem;
  height: 0.34rem;
  line-height: 0.34rem;
  margin-left: 0.1rem;
  padding-left: 0.3rem;
  color: #aaaaaa;
}
.find img {
  position: absolute;
  width: 0.16rem;
  height: 0.16rem;
  top: -0.03rem;
  left: 0.01rem;
}
.find .t1 {
  position: absolute;
  width: 0.18rem;
  height: 0.18rem;
  top: -0.03rem;
  left: 2.6rem;
}
.pic {
  height: 1.6rem;
}
.pic img {
  height: 1.6rem;
}
/* /////图标 */
.nav_box {
  width: 100%;
  height: 0.71rem;
}
.nav_box ul {
  width: 3.45rem;
  height: 0.71rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav_box ul li {
  width: 0.48rem;
  height: 0.46rem;
  margin-top: 0.25rem;
}
.nav_box ul li img {
  width: 0.22rem;
  height: 0.22rem;
  margin-left: 0.11rem;
}
.nav_box ul li p {
  font-size: 0.12rem;
  padding-top: 0.1rem;
}
.action {
  width: 100%;
  height: 0.27rem;
  margin-top: 0.25rem;
}
.action .s {
  width: 3.45rem;
  height: 1.25rem;
  margin: 0 auto;
  display: flex;
}
.action .s .left {
  width: 1.77rem;
  height: 1.25rem;
  border-right: 0.1px solid #ccc;
  border-bottom: 0.1px solid #ccc;
}
.action .s .left .title {
  line-height: 0.21rem;
  padding: 0.15rem 0 0 0.15rem;
  font-size: 0.15rem;
  color: #262626;
  font-weight: 350;
}
.action .s .left .num {
  font-size: 0.11rem;
  color: #999;
  padding-top: 0.05rem;
  padding-left: 0.15rem;
}
.action .s .left img {
  float: right;
  width: 0.8rem;
  height: 0.6rem;
  font-size: 0;
  margin-right: 0.1rem;
}
.action .s .left:nth-child(2) {
  border-right: none;
}
.action .x {
  width: 3.45rem;
  height: 1.25rem;
  margin: 0 auto;
  display: flex;
}
.action .x .moudle {
  width: 0.88rem;
  height: 1.25rem;
  border-right: 0.1px solid #ccc;
}
.action .x .moudle .kuang {
  font-size: 0.15rem;
  color: #262626;
  padding-top: 0.15rem;
  font-weight: 350;
}
.action .x .moudle span {
  line-height: 0.21rem;
  padding-left: 0.15rem;
}
.action .x .moudle p {
  font-size: 0.11rem;
  color: #999;
  padding-top: 0.05rem;
  line-height: 0.21rem;
  padding-left: 0.15rem;
}
.action .x .moudle .kuang img {
  width: 0.69rem;
  height: 0.55rem;
  margin: 0 auto;
  margin-top: 0.055rem;
  font-size: 0;
}
.action .x .moudle:nth-child(4) {
  border-right: 0;
}
.re {
  width: 100%;
  min-height: 1.05rem;
  margin-top: 2.2rem;
  position: relative;
}
.re .l1 {
  width: 0.1rem;
  height: 0.5rem;
  border-bottom: 1px solid #999;
  margin-right: 0.12rem;
  position: absolute;
  left: 1.2rem;
}
.re span {
  width: 100%;
  height: 1.05rem;
  line-height: 1.05rem;
  display: block;
  text-align: center;
  font-size: 0.18rem;
  color: #262626;
  font-weight: 350;
  margin-bottom: 0.5rem;
}
.re .r1 {
  width: 0.1rem;
  height: 0.5rem;
  border-bottom: 1px solid #999;
  margin-right: 0.12rem;
  position: absolute;
  top: 0;
  right: 1.2rem;
}
.re .jian {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  top: 0.42rem;
  right: 0.1rem;
  font-size: 0.18rem;
}
</style>
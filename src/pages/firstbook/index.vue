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
        <div class="inner1">
            <div class="book">
                <p>全部拍卖</p>
                <p>日均4万余件拍品</p>
                <img src="https://img0.kfzimg.com/operation/a8/ec/a8ec2fa9d76ae778aec20ee04d27bd69.png" alt="">
            </div>
        </div>
        <div class="data_box2">
            <div class="book">
                <p>艺术品专场</p>
                <p>名人字画墨迹等</p>
            </div>
            <div class="pic1">
                <img src="https://img0.kfzimg.com/operation/37/41/37411da7e2306956f34840cb1503894e.png" alt="">
            </div>
        </div>
        <div class="data_box2">
            <div class="book">
                <p>低价拍卖</p>
                <p>1元起拍捡漏</p>
            </div>
            <div class="pic1">
                <img src="https://img0.kfzimg.com/operation/6a/e3/6ae3e6b33782dfc51821271ac628a3af.png" alt="">
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
                <img src="https://img0.kfzimg.com/operation/4b/e7/4be7d7aabe1d8188411e178c60fb4651.png" alt="">
            </div>
        </div>
        <div class="data_box1">
            <div class="book">
                <p>今日热点</p>
                <p>每日必看</p>
            </div>
            <div class="pic1">
                <img src="https://img0.kfzimg.com/operation/bf/10/bf109d68796166dc526cd72123571f11.png" alt="">
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
                <img src="https://img0.kfzimg.com/operation/2a/f0/2af0cd06e0886d1af2ec3419d468415f.png" alt="">
            </div>
        </div>
        <div class="data_box1">
            <div class="book">
                <p>三天热点</p>
                <p>热拍推荐</p>
            </div>
            <div class="pic1">
                <img src="https://img0.kfzimg.com/operation/7d/ec/7dec8863d15871dfa80e06862635e9fb.png" alt="">
            </div>
        </div>
    </div>
    <div class="null"></div>
    <div class="auction">
        <span>好友推荐</span>
        <span class="g1">更多></span>
    </div>
    <div class="sev">
        <div class="sev_ton">
            <!-- <div class="most"> -->
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/5651/56511f5066174806a00d2a77caa5ca4c_0_1_300_300.jpg"
                    alt="">
                <div class="title">波斯笔记（精装函套 上下册）</div>
                <div class="author">李零 著</div>
                <div class="price">
                    <span>￥</span>
                    <span>176</span>
                    <span>起</span>
                </div>
            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/5355/535596875289e883a71e3fe5523241d9_0_1_300_300.jpg"
                    alt="">
                <div class="title">克莱因壶</div>
                <div class="author">[日]冈岛二人 著</div>
                <div class="price">
                    <span>￥</span>
                    <span>20</span>
                    <span>起</span>
                </div>

            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/0c00/0c0001d56817378a7a88446d755b7824_0_1_300_300.jpg"
                    alt="">
                <div class="title">我们在此相遇</div>
                <div class="author">约翰·伯格</div>
                <div class="price">
                    <span>￥</span>
                    <span>18</span>
                    <span>起</span>
                </div>
            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/4432/4432c8ac144603ba927f9083952f1afa_0_1_300_300.jpg"
                    alt="">
                <div class="title">古籍修复技术</div>
                <div class="author">童芷珍 著</div>
                <div class="price">
                    <span>￥</span>
                    <span>34</span>
                    <span>起</span>
                </div>
            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/764e/764e6f9e93cee085d7eff7c70fbdc96c_0_1_300_300.jpg"
                    alt="">
                <div class="title">大家小书汉魏六朝诗简说（精）</div>
                <div class="author">王运熙 著</div>
                <div class="price">
                    <span>￥</span>
                    <span>19.5</span>
                    <span>起</span>
                </div>
            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/6dd0/6dd08646dc84ead0bcd2391e27af90f4_0_1_300_300.jpg"
                    alt="">
                <div class="title">黄金黑白</div>
                <div class="author">[英]乔尔·W.芬勒</div>
                <div class="price">
                    <span>￥</span>
                    <span>18</span>
                    <span>起</span>
                </div>
            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/6e38/6e38c62d7c9e0a7bb4a3b0f71834b03c_0_1_300_300.jpg"
                    alt="">
                <div class="title">藤泽周平作品：三屋清左卫门残日录</div>
                <div class="author">[日本]藤泽周平</div>
                <div class="price">
                    <span>￥</span>
                    <span>37</span>
                    <span>起</span>
                </div>
            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/c864/c8642cfaa29cac3c99b863c874c394d5_0_1_300_300.jpg"
                    alt="">
                <div class="title">法国知识分子史</div>
                <div class="author">吕一民；朱晓罕</div>
                <div class="price">
                    <span>￥</span>
                    <span>36</span>
                    <span>起</span>
                </div>
            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/a5be/a5be39b6d6903ab560c2f8d004d5ad87_0_1_300_300.jpg"
                    alt="">
                <div class="title">礼拜五或太平洋上的灵薄狱</div>
                <div class="author">[法]米歇尔·</div>
                <div class="price">
                    <span>￥</span>
                    <span>39</span>
                    <span>起</span>
                </div>
            </div>
            <div class="kuang">
                <img src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/6188/618881748c4e30bde678a06522c8630d_0_1_300_300.jpg"
                    alt="">
                <div class="title">伊西斯的面纱</div>
                <div class="author">[法]皮埃尔·阿多</div>
                <div class="price">
                    <span>￥</span>
                    <span>28</span>
                    <span>起</span>
                </div>
            </div>

            <!-- </div> -->
        </div>
    </div>
    <div class="null"></div>
    <div class="auction">
        <span>书单推荐</span>
        <span class="g1">更多></span>
    </div>
    <div class="one">
        <div class="one_big">
            <div class="one2">
                <img src="https://img0.kfzimg.com/operation/64/c6/64c6beec81534d73b4db2ba54918951c.jpg" alt="">
                <p>红尘影像诗，时代记录者</p>
            </div>
            <div class="one2">
                <img src="https://img0.kfzimg.com/operation/0f/76/0f76d0dee2238a1a7c2cadd660880e0c.jpg" alt="">
                <p>由法国权威报纸《世纪报》评选</p>
            </div>
            <div class="one2">
                <img src="https://img0.kfzimg.com/operation/b1/6b/b16b883a9a482a01cb7596647848c531.jpg" alt="">
                <p>好的文学可以照见时代精神</p>
            </div>
            <!-- 查看剩余书单 -->
            <div class="more">
       
                <router-link tag="div" to="/booklist" class="book">
                    <p>查看全部</p>
                    <p>127个书单</p>
              </router-link>
            </div>
        </div>
    </div>
    <div class="null"></div>
    <div class="auction">
        <span>新书广场</span>
        <span class="g1">更多></span>
    </div>
    <div class="newSquareBox_list">
        <ul class="inner">
            <li>
                <div class="i">
                    <img :src="thindList[0].imgUrl" alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>{{thindList[0].price}}</span>
                </div>
                <div class="r">
                    <div class="title">{{thindList[0].itemName}}</div>
                    <div class="desc">{{thindList[0].importantDesc}}</div>
                    <div class="sign_box">
                        <span>{{thindList[0].tags[0]}}
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                        <span>{{thindList[0].tags[1]}}
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                        <span>{{thindList[0].tags[2]}}
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li>
                <div class="i">
                    <img :src="this.thindList[1].imgUrl" alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>{{thindList[1].price}}</span>
                </div>
                <div class="r">
                    <div class="title">{{this.thindList[1].itemName}}</div>
                    <div class="desc">{{this.thindList[1].importantDesc}}</div>
                    <div class="sign_box">
                        <span>藏书票
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                        <span>函套
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
            <li>
                <div class="i">
                    <img :src="this.thindList[2].imgUrl" alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>{{this.thindList[2].price}}</span>
                </div>
                <div class="r">
                    <div class="title">{{this.thindList[2].itemName}}</div>
                    <div class="desc">{{this.thindList[2].importantDesc}}</div>
                    <div class="sign_box">
                        <span>钤印
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                        <span>函套
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                        <span>赠品
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                        <span>特装
                            <div class="jiao">
                                <div class="jiao_inner"></div>
                            </div>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="null"></div>
    <div class="auction">
        <span>国学经典</span>
        <span class="g1">更多></span>
    </div>
    <div class="newSquareBox_list">
        <ul class="inner">
            <li>
                <div class="i">
                    <img :src="fourList[0].imgUrl" alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>{{fourList[0].price}}</span>
                </div>
                <div class="r">
                    <div class="title">{{fourList[0].itemName}}</div>
                    <div class="desc">{{fourList[0].author}}</div>
                    <div class="author">
                        {{fourList[0].contentIntroduction}}
                    </div>
                </div>
            </li>
            <li>
                <div class="i">
                    <img :src="fourList[1].imgUrl" alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>{{fourList[1].price}}</span>
                </div>
                <div class="r">
                    <div class="title">{{fourList[1].itemName}}</div>
                    <div class="desc">{{fourList[1].author}}</div>
                    <div class="author">
                        {{fourList[1].contentIntroduction}}
                    </div>
                </div>
            </li>
            <li>
                <div class="i">
                    <img :src="fourList[2].imgUrl" alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>{{fourList[2].price}}</span>
                </div>
                <div class="r">
                    <div class="title">{{fourList[2].itemName}}</div>
                    <div class="desc">{{fourList[2].author}}</div>
                    <div class="author">
                        {{fourList[2].contentIntroduction}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="huan">换一换
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEUAAAA2WJk2WJk3WZtEbak2WJk2WZk2WJo3WJo3Wpo4Wps3Wps3W546XaI2WZo3WZo2WJo2WZo5Wps5WZo7W5s9YZ42WZk3WZo2WJo3WZo3WZo2WJk2WJo4Wpo3WZs2WZk3WZo4W5uAgP83WZo4WZk2WJmQgH9YAAAAJXRSTlMA9fBnCN/X6rBWUkIoDujJt5wyLB0VzIXSu6ali3tbUEs5ApBf2p/i4wAAANBJREFUOMvt08kSgjAQBNDMkARiCJss7nv//y+6XBQdLao8cKFPTNc7JExFTRk3IUoM8SK5hJ9Md4S4KNctg7ZahcVRdqlF4U+Pz30Om1aIZJexe047ypwMg+HqdfZMMixx6BcOIqyxeq+WIuww/7ycdOvcqmGJzwNhrf9YqG4Gwk02ENpcKKv44/fM0QlwhuV7tUItQrh+c0CpREjse2dhE2QYGdo9Z8e3Q8vQNy3y/WM4+QI2/bKZpFF6m4HbdVnEoI3+vYv74yKTRI2aMmquGSELMu+krSYAAAAASUVORK5CYII="
            alt="">
    </div>
    <div class="null"></div>
    <div class="auction">
        <span>新近出版</span>
        <span class="g1">更多></span>
    </div>
    <div class="newSquareBox_list">
        <ul class="inner">
            <li>
                <div class="i">
                    <img :src="maxList[0].imgUrl" alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>{{maxList[0].price}}</span>
                </div>
                <div class="r">
                    <div class="title">{{maxList[0].itemName}}</div>
                    <div class="desc">{{maxList[0].author}}</div>
                    <div class="author">
                        {{maxList[0].contentIntroduction}}
                    </div>
                </div>
            </li>
            <li>
                <div class="i">
                    <img :src="maxList[1].imgUrl" alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>{{maxList[1].price}}</span>
                </div>
                <div class="r">
                    <div class="title">{{maxList[1].itemName}}</div>
                    <div class="desc">{{maxList[1].author}}</div>
                    <div class="author">
                        {{maxList[1].contentIntroduction}}
                    </div>
                </div>
            </li>
            <li>
                <div class="i">
                    <img class="l2"
                        src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/isbn/1/13d2/13d2a1f0f85158bdffe5e0bb804dd465_0_1_300_300.jpg"
                        alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>30.16</span>
                </div>
                <div class="r">
                    <div class="title">舍斯托夫文集(第7卷)：钥匙的统治</div>
                    <div class="desc">舍斯托夫 著 / 商务印书馆 / 2019-07 / 精装</div>
                    <div class="author">
                        《中国家庭基本藏书:按照舍斯托夫的构想，本书原准备写成陀思妥耶夫斯基宗教大法官传说的续篇。在舍斯托夫看来，这一传说是对几
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="huan">换一换
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEUAAAA2WJk2WJk3WZtEbak2WJk2WZk2WJo3WJo3Wpo4Wps3Wps3W546XaI2WZo3WZo2WJo2WZo5Wps5WZo7W5s9YZ42WZk3WZo2WJo3WZo3WZo2WJk2WJo4Wpo3WZs2WZk3WZo4W5uAgP83WZo4WZk2WJmQgH9YAAAAJXRSTlMA9fBnCN/X6rBWUkIoDujJt5wyLB0VzIXSu6ali3tbUEs5ApBf2p/i4wAAANBJREFUOMvt08kSgjAQBNDMkARiCJss7nv//y+6XBQdLao8cKFPTNc7JExFTRk3IUoM8SK5hJ9Md4S4KNctg7ZahcVRdqlF4U+Pz30Om1aIZJexe047ypwMg+HqdfZMMixx6BcOIqyxeq+WIuww/7ycdOvcqmGJzwNhrf9YqG4Gwk02ENpcKKv44/fM0QlwhuV7tUItQrh+c0CpREjse2dhE2QYGdo9Z8e3Q8vQNy3y/WM4+QI2/bKZpFF6m4HbdVnEoI3+vYv74yKTRI2aMmquGSELMu+krSYAAAAASUVORK5CYII="
            alt="">
    </div>
    <div class="null"></div>
    <div class="auction">
        <span>销售排行</span>
        <span class="g1">更多></span>
    </div>
    <div class="newSquareBox_list">
        <ul class="inner">
            <li>
                <div class="i">
                    <img class="l3"
                        src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/2223/22231df841f81aa9fe6175e3205fae03_0_1_300_300.jpg"
                        alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>45</span>
                </div>
                <div class="r">
                    <div class="title">书店日记</div>
                    <div class="desc">肖恩·白塞尔 著；顾真 译 / 广西师范大学出版社 / 2019-08 / 精装</div>
                    <div class="author">
                        美国以自由的代/言/18岁的时候，肖恩?白塞尔第yi次在苏格兰小镇威格敦看到那家名叫“书店”（TheBookShop）的
                    </div>
                </div>
            </li>
            <li>
                <div class="i">
                    <img class="l3"
                        src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/1/a65b/a65bb65a88827ab3c6abd4f695e257c5_0_1_300_300.jpg"
                        alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>28</span>
                </div>
                <div class="r">
                    <div class="title">汗青堂丛书037·海上丝绸之路</div>
                    <div class="desc">[德]罗德里希·普塔克 著；史敏岳 译 / 中国友谊出版公司 / 2019-10 / 精装</div>
                    <div class="author">
                        15世纪初，中国的巨舰曾航行在东南亚和印度洋，其航程远达霍尔木兹、亚丁湾和东非海岸。当郑和于1405
                    </div>
                </div>
            </li>
            <li>
                <div class="i">
                    <img class="l3"
                        src="https://booklibimg.kfzimg.com/data/book_lib_img_v2/isbn/1/f948/f9488e4671da8d195ed289243dae7443_0_1_300_300.jpg"
                        alt="">
                </div>
                <div class="price">
                    <span>￥</span>
                    <span>28</span>
                </div>
                <div class="r">
                    <div class="title">当代中国社会分层</div>
                    <div class="desc">李强 / 生活·读书·新知三联书店，生活书店出版有限公司 / 2019-06 / 平装</div>
                    <div class="author">
                        《中国家庭基本藏书:这是一本基于中国经验和中国研究的社会分层集大成之作，标志着中国社会学社会分层研究的成熟，也是一本教科
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="huan">--没有更多--</div>
    <div class="null"></div>
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
      yi:[],
      thindList:[],
      fourList:[],
    };
  },
  created() {
    this.handleGetFirstList(1);
    this.handleGetThindList(3);
    this.handleGetFourList(4);
    this.handleGetMaxList(4);
  },
  methods: {
    async handleGetFirstList(cityId) {
      let data = await firstApi(cityId);

      this.firstList = data.result.list[0].data;
      this.twoList = data.result.list[1].data;
      //console.log(data);
    },
      async handleGetThindList(cityId) {
       let data = await firstApi(cityId);
       this.thindList = data.result.list[2].data[0].data;
      //  console.log(this.thindList[2]);
     },
      async handleGetFourList(cityId) {
       let data = await firstApi(cityId);
       this.fourList = data.result.list[0].data[0].data;
       //console.log( this.fourList[1]);
     },
      async handleGetMaxList(cityId) {
       let data = await firstApi(cityId);
       this.maxList = data.result.list[1].data[0].data;
       console.log( this.maxList);
     },
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
  margin-top: 0.12rem;
  margin-left:0.2rem;
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
  left:0;
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
.sev_ton::-webkit-scrollbar {
    display:none;
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
  height: 2.02rem;
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
  /* height: 0.67rem; */
  padding-top: 0.15rem;
}
.newSquareBox_list .inner li .i .l1 {
  width: 1rem;
  height: 1.2rem;
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
  min-height: 1rem;
  display: flex;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  /* margin-top: 0.2rem; */
}
.huan img {
  width: 0.2rem;
  height: 0.2rem;
}
</style>
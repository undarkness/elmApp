<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>Product List</h2>
        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a>
 <!-- 如果是hot，在右侧渲染一个hot标签 -->
              <span v-if="item.hot" class="hot-tag">HOT</span> 
            </li>
          </ul>
 <!-- 判断是否是本类最后一条信息，是则渲染跟下栏隔开 -->
          <div v-if="!product.last" clss="hr"></div>
        </template>
<!--         <div class="lastest-news">
          <h2>News</h2>
          <ul>
            <li v-for="item in Newslist" class="news-item"></li>
            <a :href="item.url">{{item.name}}</a>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="index-right">
      <slide-show :slides="slides" :inv="slideSpeed"></slide-show>
      <div class="index-board-list">
        <div v-for="(item,index) in boardList" class="index-board-item" 
        :class="[{'line-last':index%2!=0},'index-board-'+item.id]">
          <div class="index-board-item-inner" ></div>
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <div class="index-board-button"><a href="" class="button">Buynow</a> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow.vue'
export default {
  created: function () {
    this.$http.get('api/getNewsList')
    .then((res) => {
      this.newsList = res.data
    }, (err) => {
      console.log(err)
    })
  },
  components: {
    'slide-show': slideShow
  },
  data () {
    return {
      slideSpeed: 3000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      newsList: [],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
.index-wrap {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 25%;
  text-align: left;
}
.index-right {
  float: left;
  width: 75%;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 44%;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 2%;
  margin-right: 2%;
  margin-bottom: 2%;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  border-radius: 1px;
/*  position: absolute;
  margin-left: 4px;
  margin-top: -1px;*/
}
.news-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;/*超过width部分省略*/
  white-space: nowrap;/*强制文本在一行内显示*/
}
.index-left-block li:hover{
  color: #fff;
  background: #20DCF8;
  transition: 0.2s;
}
</style>

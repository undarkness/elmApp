<template>
  <div class="slide-show slide-trans-enter-active">
    <a class="img" v-for="{item,index} in sildes" :href="item.href">
      <img :src="item.src" alt="">
    </a>
    <h2>{{item.title}}</h2>
    <ul class="slide-pages">
      <li class="on">&lt;</li>
<!--       <li v-for="{{item,index}} in sildes" @click="goto">
        {{index + 1}}
      </li> -->
      <li class="on">&rt;</li>
    </ul>
  </div>
</template>

<script>
export default{
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  }
  // computed: {

  // },
  // methods: {
  //   goto (index) {
  //     this.nowindex = index
  //   }
  // }
}
</script>
<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>

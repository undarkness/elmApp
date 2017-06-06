<template>
  <div class="dy-nav nav-type-1">
    <a v-for="(item,index) in items" :class="[commonClass,item.active?activeClass:'']">
      <span class="nav-text">{{item.text}}</span>
    </a>
  </div>
</template>

<script>
  export default{
    date(){
      return{
        items:[
        {
          text:'首页',
          active:true
        },
        {
          text:'列表',
          active:false
        },
        {
          text:'关于',
          active:false
        },
        {
          text:'招聘',
          active:false
        }
        ]
      }
    },
    methods:{
      navClickEvent(items,index){
        /*默认切换类的动作*/
        items.forEach(el){
          el.active=false;
        };
        item[index].active=true;
        this.$emit('navClickEvent',items,index);
      }
    }
  }
</script>
<style scoped>
  @import './css/rest.css'
  @import './css/dy-nav.css'
</style>

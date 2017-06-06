<template>
  <div id="tempComp">
  <!--使用-->
    <dy-btn msg="确定" class="small"></dy-btn>
    <dy-btn msg="no1" @btnClickEvent="doSth1" class="small"></dy-btn>
    <dy-btn msg="no2" @btnClickEvent="doSth2" class="small">
      <img slot="icon" clss="ico" src="../assets/logo.png" alt="slot示例">
    </dy-btn>
    <dy-list tipsText="默认样式，右边按钮" msg="out"></dy-list>
    <dy-list @btnClickEvent="test"></dy-list>  
    <dy-list ref="child1" tipsText="右边箭头" currentView="dy-arrow"></dy-list>
<!--     ref属性代表组件集合，当页面中有很多组件的时候，可以通过几种方法来获取对应的某个组件的信息：
    console.log(this.$children[0].msg);//通过数组获取
    console.log(this.$refs.child1.msg);//通过对象集合获取
 -->
  </div>
</template>

<script>
  /*引用组件*/
  import dyBtn from '../components/dyBtn.vue'
  import dyList from '../components/dyList.vue'
  export default{
    name: 'tempComp',
    /*注册组件*/
    components:{
      'dy-btn': dyBtn,
      'dy-list': dyList
    }
    methods:{
      doSth1(){alert('Sth1')}
      doSth2(){alert('Sth2')}
    }
    beforeCreate:function(){},//组件实例化之前
    created:function(){},//组件实例化了
    beforeMount:function(){},//组件写入dom结构之前
    // 要想使用refs的内容，就需要在组件写入dom之后才能开始调用
    mounted:function(){//组件写入dom结构了
      console.log(this.$children);
      console.log(this.$refs);
    },
    beforeUpdate:function(){},//组件更新前
    updated:function(){},//组件更新比如修改了文案
    beforeDestroy:function(){},//组件销毁之前
    destroyed:function(){}//组件已经销毁  
  }
</script>

<style scoped>
  @import './css/rest.css'
  @import './css/temp-comp.css'
</style>

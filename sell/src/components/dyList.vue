<template>
  <div class="dyList">
    <span class="list-tip">{{tipsText}}</span>
    <component :is="currentView" @btnClickEvent="btnClickEvent" :msg=msg class="small" keep-alive></component>
    <!-- "：msg=msg"表示绑定的是一个变量msg，msg是由按钮组件暴露给本列表组件使用，然后这个属性通过props继续暴露出去-->

  </div>
</template>

<script>
  import dyBtn from '../components/dyBtn.vue'
  import dyArrow from '../componets/dyArrow.vue'
  export default{
    props:{
      msg:{
        default: '下载'
      },
      tipTSext:{
        default: '默认'
      }
      currentView:{
        default: 'dy-btn'
      }
    }, 
    components:{
      'dy-btn':dyBtn,
      'dy-arrow':dyArrow
    },
    motheds:{
      btnClickEvent(){
        alert('dylist')
      }
    },
  }
</script>

<style scoped>
  @import './css/rest.css'
  @import './css/dy-nav.css'
</style>

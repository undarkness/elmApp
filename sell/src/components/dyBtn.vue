<template>
  <button class="dy-btn" @click="btnClickEvent">
    <slot name='icon'></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  props:{
    msg:{
      default:'下载'
    }
  },
  method:{
    btnClickEvent(){
      alert(this.msg);
      this.$emit('btnClickEvent')//父组件触发自定义事件
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './css/rest.css'
  @import './css/dy-btn.css'
</style>

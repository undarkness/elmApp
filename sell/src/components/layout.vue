<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <div class="head-logo">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="head-nav">
          <ul class="nav-list">
            <li>login</li>
            <li class="nav-pile">|</li>
            <li>register</li>
            <li class="nav-pile">|</li>
            <li>about</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive> 
    </div>
    <div class="app-foot">
      <p>&copy; 2016 fishenal MIT</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'i am apple'
    }
  }
}
</script>

<style>
  @import './css/normal.css'
</style>

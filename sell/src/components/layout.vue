<template>
  <div>
    <div class="app-head">
        <div class="head-logo">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="head-nav">
          <ul class="nav-list">
            <li> {{ username }} </li>
            <li v-if="username!== ''" class="nav-pile">|</li>
            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username=== ''" @click="logClick">Login</li>
            <li class="nav-pile">|</li>
            <li v-if="username=== ''" @click="regClick">Register</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">About</li>
          </ul>
        </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive> 
    </div>
    <div class="app-foot">
      <p>&copy; 2017 xxxx  </p>
    </div>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
    </my-dialog>

    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
    
  </div>
</template>

<script>
import Dialog from './myDialog'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm
  },
  data () {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username: ''
    }
  },
  methods: {
    aboutClick () {
      this.isShowAboutDialog = true
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    onSucessLog (data) {
      console.log(data)
      this.closeDialog('isShowLogDialog')
      this.username = data.username
    }
  }
}
</script>

<style>
  @import './css/layout.css'
</style>

<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名</span>
        <div class="g-from-input">
          <input type="text" v-model="usernameModel" placeholder="请输入应户名">
        </div>
        <span class="g-from-error">{{ userError.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码</span>
        <div class="g-from-input">
          <input type="text" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-from-error">{{ passwordError.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.usernameModel) || !/\./g.test(this.usernameModel)) {
        status = false
        errorText = '不是合法的邮箱'
      } else {
        status = true
        errorText = ''
      }
/* 手机号以1开头，第二位可能是3/4/5/7/8等的任意一个，在加上后面的9位{9}数字\d的，总共加起来11位结束。
if (!(/^1[3|4|5|7|8]\d{9}$/.test(num))) {
      status = false
      errorText = '请输入手机号'
 } else {
   status = true
   errorText = ''
 } */
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordError () {
      let errorText, status
      if (!/^\w{6,12}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码必须是6-12位'
      } else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        this.errorText = '用户名或密码错误'
      } else {
        this.errorText = ''
        this.$http.get('api/login')
        .then((res) => {
          this.$emit('has-log', res.data)
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


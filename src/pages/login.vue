<template>
  <div class="page">
      <div class="page-border">
    <div class="page-content">
      <div class="login-title">登录页面</div>
        <br />
      <div class="components-input-demo-presuffix">
        <a-input size="large"
                 ref="userNameInput"
                 v-model="loginData.userName"
                 placeholder="input userName">
          <a-icon slot="prefix"
                  type="user" />
          <a-tooltip slot="suffix"
                     title="Extra information">
            <a-icon type="info-circle"
                    style="color: rgba(0,0,0,.45)" />
          </a-tooltip>
        </a-input>
        <br />
        <br />
      </div>
      <a-input-password size="large"
                        v-model="loginData.password"
                        placeholder="input password">
        <a-icon slot="prefix"
                type="lock" />
      </a-input-password>
      <br />
      <br />
      <a-button type="primary"
                block
                @click="loginIn">登录</a-button>

    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userName: '',
      loginData: {
        userName: '',
        password: '',
      },
    }
  },

  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus()
      this.userName = ''
    },
    loginIn() {
      if (this.loginData.userName === 'admin' && this.loginData.password === 'admin') {
        this.$router.push({ path: '/index' })
      } else {
        let errMsg = ''
        if (this.loginData.userName !== '' && this.loginData.password !== '') {
          errMsg = '输入的用户名或密码不正确'
        } else {
          if (!this.loginData.userName && !this.loginData.password) {
            errMsg = '未输入用户名和密码'
          } else if (!this.loginData.userName) {
            errMsg = '未输入用户名'
          } else if (!this.loginData.password) {
            errMsg = '未输入密码'
          }
        }
        this.$router.push({ path: '/error', query: { errMsg: errMsg } })
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F0F2F5;
}
.page-border{
  background: #1E222A;
  opacity: 0.8;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  box-shadow: 4px 4px 6px #1E222A;

}
.page-content {
  width: 300px;
  margin: 50px 50px 70px 50px;
}
.login-title{
    font-size: 18px;
    font-weight: 600;
    color: white;
}
.ant-input-affix-wrapper {
  width: 300px;
}
</style>

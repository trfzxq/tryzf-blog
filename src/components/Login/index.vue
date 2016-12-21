<template lang="html">
  <div class="col-sm-4 col-sm-offset-4 login-module">
    <h1 class="page_title">Login backstage</h1>
    <form class="form">
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" placeholder="username" v-model.trim="username"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="password" v-model.trim="password"/>
      </div>
      <div class="clearfix">
        <label class="checkbox_label">
          <input type="checkbox"/> Remember password
        </label>
        <button type="button" class="btn btn-empty btn-primary pull-right" @click="submitLogin">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import cookie from 'assets/js/cookie'
export default {
  data () {
    return {
      password: null,
      username: null,
      message: {
        title: '请假'
      },
      hello: null
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    submitLogin () {
      if (!this.username || !this.password) {
        window.alert('帐号或密码不能为空！')
        return
      }
      let userInfo = {
        'username': this.username,
        'password': this.password
      }
      this.$store.dispatch('login', userInfo).then(() => {
        let result = this.$store.state.loginState
        if (result.state === 1) {
          cookie.setCookie('token', result.token)
          window.location.href = '/backstage/write'
        } else {
          window.alert(result.msg)
        }
      })
    }
  }
}
</script>
<style lang="css" scoped>
.login-module{
  box-shadow: 1px 2px 4px #ccc;
  border-radius: 8px;
  padding:20px;
  margin-top:6%;
}
.page_title {
  font-size:40px;
  color:#54387c;
  font-weight: bold;
  text-align: center;
  margin-bottom:20px;
}
.checkbox_label {
  position: relative;
  top:6px;
}
.checkbox_label input {
  vertical-align: top;
}
</style>

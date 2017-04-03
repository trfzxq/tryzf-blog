<template>
  <div class="login-box row">
    <div class="col-4 offset-left-4">
      <h1 class="login_title"><a href="/">Tryzf Login entry</a></h1>
      <section class="login_section">
        <i class="fa fa-user"></i>
        <input type="text" v-model="username" class="login_input" placeholder="username"/>
      </section>
      <section class="login_section">
        <i class="fa fa-unlock-alt"></i>
        <input type="password" v-model="password" class="login_input" placeholder="password"/>
      </section>
      <section class="login_button__box">
        <button type="button" class="login_button" @click="login">登录</button>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      let data = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('login', data)
      .then((data) => {
        this.$toast({text: data.msg})
        this.$router.push({
          path: '/backend'
        })
      })
      .catch(err => {
        this.$toast({text: err.msg, type: 'e'})
      })
    }
  }
}
</script>
<style lang="scss">
.login_title {
  margin-bottom:60px;
  text-align:center;
}
.login-box {
  margin:100px auto;
  section {
    margin-bottom:30px;
  }
}
.login_input {
  border:1px solid #eee;
  border-radius:20px;
  height: 60px;
  width: 100%;
  padding-left: 70px;
  font-size: 30px;
  overflow:hidden;
  color:#ddd;
  box-sizing:border-box;
  &:focus {
    outline: none;
  }
}
.login_section {
  position:relative;
  i {
    font-size:60px;
    color:#bbb;
    position:absolute;
    left:10px;
  }
  .fa-unlock-alt {
    top:4px;
  }
}
.login_button__box {
  text-align:right;
}
.login_button {
  width:30%;
  background:#3091f2;
  color:#fff;
  border:1px solid #eee;
  border-radius:6px;
  padding:10px 16px;
}
</style>

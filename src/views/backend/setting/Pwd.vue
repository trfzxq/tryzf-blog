<template lang="html">
  <form class="form col-12">
    <div>
      <label class="input-before_label">原密码</label>
      <input class="input" type="password" v-model.trim="oldPassword" />
    </div>
    <div>
      <label class="input-before_label">新密码</label>
      <input class="input" type="password" v-model.trim="newPassword" />
    </div>
    <div class="form-button_group">
      <button class="btn btn-primary btn-lg btn-block" type="button" @click="submit">提交</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      oldPassword: '',
      newPassword: ''
    }
  },
  methods: {
    submit () {
      let data = {
        oldPwd: this.oldPassword,
        newPwd: this.newPassword
      }
      if (!data.oldPwd || !data.newPwd) {
        return this.$toast({text: '密码不能为空！', type: 'e'})
      }
      this.$store.dispatch('updatePwd', data)
      .then(() => {
        this.$toast({text: '修改成功， 即将登陆！', type: 's'})
        setTimeout(() => {
          this.$store.dispatch('signout')
          this.$router.push({
            path: '/login'
          })
        }, 1000)
      })
    }
  }

}
</script>

<style lang="scss">
</style>

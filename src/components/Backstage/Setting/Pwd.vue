<template lang="html">
  <form class="form col-sm-12">
    <div class="form-group">
      <label>原密码</label>
      <input class="form-control" type="password" v-model.trim="oldPassword"/>
    </div>
    <div class="form-group">
      <label>新密码</label>
      <input class="form-control" type="password" v-model.trim="newPassword"/>
    </div>
    <div class="form-group">
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
      if (!this.oldPassword) {
        window.alert('原密码不能为空')
        return
      } else if (!this.newPassword) {
        window.alert('新密码不能为空')
        return
      }
      let data = {
        oldPwd: this.oldPassword,
        newPwd: this.newPassword
      }
      this.$store.dispatch('updatePwd', data)
    }
  }

}
</script>

<style lang="css">
</style>

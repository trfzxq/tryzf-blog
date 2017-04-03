<template lang="html">
  <form clsas="form">
    <div clsas="form-group">
      <label class="input-before_label">头像的链接</label>
      <input class="input" type="text" v-model="userInfo.headURL"/>
    </div>
    <div clsas="form-group">
      <label class="input-before_label">博客名</label>
      <input class="input" type="text" v-model="userInfo.blogTitle"/>
    </div>
    <div>
      <label class="input-before_label">一句介绍自己的话</label>
      <textarea class="form-control mrgB10" v-model="userInfo.motto"></textarea>
    </div>
    <div class="form-button_group">
      <button type="button" class="btn btn-primary" @click="save">保存</button>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  created () {
    if (!this.userInfo.headURL) {
      this.getUserInfo()
    }
  },
  methods: {
    getUserInfo () {
      this.$store.dispatch('getUserInfo')
    },
    save () {
      let data = {
        blogTitle: this.userInfo.blogTitle,
        headURL: this.userInfo.headURL,
        motto: this.userInfo.motto
      }
      if (!data.blogTitle || !data.headURL || !data.motto) {
        return this.$toast({text: '信息未填写完整', type: 'e'})
      }
      this.$store.dispatch('updateUserInfo', data)
      .then(msg => {
        this.$toast({text: msg, type: 's'})
      })
      .catch(msg => {
        this.$toast({text: msg, type: 'e'})
      })
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
figure {
  text-align: center;
}
figure img {
  width:50px;
  height: 50px;
  border-radius: 50%;
}
.mrgB10 {
  margin-bottom:10px;
}
</style>

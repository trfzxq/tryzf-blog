<template lang="html">
  <form clsas="form">
    <div clsas="form-group">
      <label>头像的链接</label>
      <input class="form-control mrgB10" type="text" v-model="userInfo.headURL"/>
    </div>
    <div clsas="form-group">
      <label>博客名</label>
      <input class="form-control mrgB10" type="text" v-model="userInfo.blogTitle"/>
    </div>
    <div class="form-group">
      <label>一句介绍自己的话</label>
      <textarea class="form-control mrgB10" v-model="userInfo.motto"></textarea>
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary" @click="save">保存</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
    }
  },
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
      this.$store.dispatch('updateUserInfo', data)
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
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

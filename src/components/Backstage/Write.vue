<template lang="html">
  <form>
    <div class="form-group">
      <label>标题</label>
      <input class="form-control" placeholder="文章标题" v-model="tempArticle.title"/>
    </div>
    <div class="form-group">
      <label>类型</label>
      <input class="form-control" type="text" placeholder="类型" v-model="tempArticle.types"/>
    </div>
    <div class="form-group">
      <label>正文</label>
      <textarea class="form-control" v-model="tempArticle.content"></textarea>
    </div>
    <div class="form-group">
      <button type="button" name="button" class="btn btn-danger" @click="clear">清空</button>
      <button type="button" name="button" class="btn btn-primary" @click="save">保存</button>
      <button v-if="!isUpdateArticle" type="button" name="button" class="btn btn-success" @click="add">发布</button>
      <button v-if="isUpdateArticle" type="button" class="btn btn-success" @click="update">更改</button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      temporaryArticle: {}
    }
  },
  computed: {
    tempArticle () {
      return this.$store.state.updateArticle || this.$store.state.temporaryArticle || {}
    },
    isUpdateArticle () {
      return this.$store.state.isUpdateArticle
    }
  },
  methods: {
    save () {
      let data = this.tempArticle
      this.$store.dispatch('saveArticle', data)
    },
    add () {
      let data = this.tempArticle
      this.$store.dispatch('createdArticle', data)
    },
    clear () {
      this.temporaryArticle = {}
    },
    update () {
      let data = this.tempArticle
      console.log(data)
      this.$store.dispatch('updateArticle', data)
    }
  }
}
</script>

<style lang="css">
</style>

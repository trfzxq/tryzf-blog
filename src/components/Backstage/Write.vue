<template lang="html">
  <form>
    <div class="form-group">
      <label>标题</label>
      <input class="form-control" placeholder="文章标题" v-model="tempArticle.title"/>
    </div>
    <div class="form-group">
      <label>类型</label>
      <input class="form-control" type="text" placeholder="不同类型用;隔开" v-model="tempArticle.types"/>
    </div>
    <div class="form-group">
      <label>正文</label>
      <Markdown ref="markdown" :sourceContent="tempArticle.sourceContent"></Markdown>
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
import Markdown from '../common/Markdown'
export default {
  data () {
    return {
      temporaryArticle: {}
    }
  },
  computed: {
    tempArticle () {
      let article = this.$store.state.updateArticle || this.$store.state.temporaryArticle || {}
      if (article.types instanceof Array) {
        article.types = article.types.join(';')
      }
      return article
    },
    isUpdateArticle () {
      return this.$store.state.isUpdateArticle
    }
  },
  methods: {
    save () {
      let data = this.tempArticle
      data.content = this.$refs.markdown.getHtmlValue()
      data.sourceContent = this.$refs.markdown.getMarkdownValue()
      this.$store.dispatch('saveArticle', data)
    },
    add () {
      let data = this.tempArticle
      data.content = this.$refs.markdown.getHtmlValue()
      data.sourceContent = this.$refs.markdown.getMarkdownValue()
      this.$store.dispatch('createdArticle', data)
    },
    clear () {
      this.$store.state.updateArticle = {}
      this.$store.state.temporaryArticle = {}
      this.temArticle = {}
    },
    update () {
      let data = this.tempArticle
      data.content = this.$refs.markdown.getHtmlValue()
      data.sourceContent = this.$refs.markdown.getMarkdownValue()
      this.$store.dispatch('updateArticle', data)
      .then(() => {
        this.$router.push('/backstage/articleList')
      })
    }
  },
  components: {
    Markdown
  }
}
</script>

<style lang="css">
</style>

<template>
  <div>
    <section>
      <label class="input-before_label">文章标题</label>
      <input type="text" class="input" v-model="tempArticle.title" placeholder="文章标题" />
    </section>
    <section>
      <label class="input-before_label">文章类型</label>
      <input type="text" class="input" placeholder="不同类型用;隔开" v-model="tempArticle.types" />
    </section>
    <section>
      <label class="input-before_label">正文</label>
      <Markdown ref="markdown" :sourceContent="tempArticle.sourceContent"></Markdown>
    </section>
    <section>
      <button type="button" name="button" class="btn btn-danger" @click="clear">清空</button>
      <button type="button" name="button" class="btn btn-primary" @click="save">保存</button>
      <button v-if="!isUpdateArticle" type="button" name="button" class="btn btn-success" @click="create">发布</button>
      <button v-if="isUpdateArticle" type="button" class="btn btn-success" @click="update">更改</button>
    </section>
  </div>
</template>
<script>
  import Markdown from 'components/Markdown.vue'
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
      create () {
        let data = this.tempArticle
        data.content = this.$refs.markdown.getHtmlValue()
        data.sourceContent = this.$refs.markdown.getMarkdownValue()
        if (!data.title || !data.types || !data.content) {
          return this.$toast({text: '小子，内容没填写完整!', type: 'e', timeout: 2000})
        }
        this.$store.dispatch('createdArticle', data)
        .then(msg => {
          this.$toast({text: msg, type: 's'})
          this.$router.push('/backstage/articleList')
        })
        .catch(error => {
          this.$toast({text: error, type: 'e'})
        })
      },
      update () {
        let data = this.tempArticle
        data.content = this.$refs.markdown.getHtmlValue()
        data.sourceContent = this.$refs.markdown.getMarkdownValue()
        if (!data.title || !data.types || !data.content) {
          return this.$toast({text: '小子，内容没填写完整!', type: 'e', timeout: 2000})
        }
        this.$store.dispatch('updateArticle', data)
        .then(msg => {
          this.$toast({text: msg, type: 's'})
          this.$router.push('/backstage/articleList')
        })
        .catch(error => {
          this.$toast({text: error, type: 'e'})
        })
      },
      save () {
        let data = this.tempArticle
        data.content = this.$refs.markdown.getHtmlValue()
        data.sourceContent = this.$refs.markdown.getMarkdownValue()
        if (!data.title || !data.types || !data.content) {
          return this.$toast({text: '小子，内容没填写完整!', type: 'e', timeout: 2000})
        }
        this.$store.dispatch('saveArticle', data)
        .then(msg => {
          this.$toast({text: msg, type: 's'})
        })
        .catch(msg => {
          this.$toast({text: msg, type: 'e'})
        })
      },
      clear () {
        this.$store.state.updateArticle = {}
        this.$store.state.temporaryArticle = {}
        this.$refs.markdown.clearValue()
        this.temporaryArticle = {}
      }
    },
    components: {
      Markdown
    }
  }
</script>

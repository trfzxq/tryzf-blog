<template>
  <div>
    <main class="container article_container">
      <article>
        <h1 class="article_title">{{ article.title }}</h1>
        <section class="article_info">
          <div class="bottom_border">
            <i class="fa fa-user-o">
              {{ article.author }}
            </i>
            <i class="fa fa-clock-o">
              {{ article.date }}
            </i>
          </div>
        </section>
        <section v-html="article.content" class="article_content"></section>
        <section class="article_tags">
          <i class="fa fa-tags"></i>
          <span v-for="item in article.types">{{ item }}</span>
        </section>
      </article>
      <Comment :comment="article"></Comment>
    </main>
  </div>
</template>

<script>
  import Comment from 'components/Comment.vue'
  export default {
    data () {
      return {
      }
    },
    computed: {
      article () {
        return this.$store.state.articleDetaile
      }
    },
    created () {
      this.getArticle()
    },
    methods: {
      getArticle () {
        console.log(this.$route.params.id)
        this.$store.dispatch('getArticleDetaile', this.$route.params.id)
      }
    },
    components: {
      Comment
    }
  }
</script>
<style lang="scss" >
.article_container {
  padding: 20px 0;
}
</style>

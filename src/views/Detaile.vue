<template>
  <div>
    <main class="container">
      <article class="detaile_article">
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
  import {formatDateTime} from '../filters/index'
  export default {
    data () {
      return {
      }
    },
    computed: {
      article () {
        var articleDetaile = this.$store.state.articleDetaile
        articleDetaile.date = formatDateTime(new Date(articleDetaile.date))
        return articleDetaile
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
@import '../scss/markdown.scss';
@import '~highlight.js/styles/atom-one-light.css';
.detaile_article {
  padding: 20px 0;
}
</style>

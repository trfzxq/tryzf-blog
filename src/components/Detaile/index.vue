<template lang="html">
  <div>
    <headerComponent></headerComponent>
    <minHeader></minHeader>
    <BodyComponent :article="article"></BodyComponent>
    <Comment></Comment>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import headerComponent from '../common/Header'
import minHeader from '../common/MinHeader'
import BodyComponent from './Body'
import FooterComponent from '../common/Footer'
import Comment from './Comment'

export default {
  data () {
    return {
      article: []
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      this.$store.dispatch('getArticleDetaile', this.$route.params.id)
      .then(() => {
        let article = this.$store.state.articleDetaile
        console.log(article)
        this.article = article
      })
    }
  },
  components: {
    headerComponent,
    minHeader,
    BodyComponent,
    FooterComponent,
    Comment
  }
}
</script>

<style lang="css">
</style>

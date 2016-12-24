<template lang="html">
  <div>
    <headerComponent></headerComponent>
    <minHeader></minHeader>
    <BodyComponent :article="article"></BodyComponent>
    <Comment :comment="article"></Comment>
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
      this.$store.dispatch('getArticleDetaile', this.$route.params.id)
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

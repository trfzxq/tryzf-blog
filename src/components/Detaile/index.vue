<template lang="html">
  <div>
    <BodyComponent :article="article"></BodyComponent>
    <Comment :comment="article"></Comment>
  </div>
</template>

<script>
import BodyComponent from './Body'
import Comment from './Comment'

export default {
  name: 'articleDetaile',
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
    BodyComponent,
    Comment
  }
}
</script>

<style lang="css">
</style>

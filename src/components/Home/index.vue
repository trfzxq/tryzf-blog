<template lang="html">
  <div>
    <headerComponent></headerComponent>
    <minHeader v-once></minHeader>
    <BodyComponent :articleList="articleList"></BodyComponent>
    <UserInfo></UserInfo>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import headerComponent from '../common/Header'
import minHeader from '../common/MinHeader'
import BodyComponent from './Body'
import UserInfo from '../common/UserInfo'
import FooterComponent from '../common/Footer'

export default {
  data () {
    return {
      articleList: [],
      start: 0,
      sizePage: 10
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      let vm = this
      this.$store.dispatch('getArticle', this.start, this.sizePage)
      .then(() => {
        let articleList = this.$store.state.articles
        console.log(articleList)
        vm.articleList = articleList
      })
    }
  },
  components: {
    headerComponent,
    minHeader,
    BodyComponent,
    UserInfo,
    FooterComponent
  }
}
</script>

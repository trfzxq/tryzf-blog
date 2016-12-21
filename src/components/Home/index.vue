<template lang="html">
  <div>
    <headerComponent></headerComponent>
    <minHeader v-once></minHeader>
    <BodyComponent :articleList="articleList"></BodyComponent>
    <UserInfo :userInfo="userInfo"></UserInfo>
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
      userInfo: [],
      articleList: [],
      start: 0,
      sizePage: 10
    }
  },
  created () {
    this.getArticle()
    this.getUserInfo()
  },
  methods: {
    getArticle () {
      this.$store.dispatch('getArticle', this.start, this.sizePage)
      .then(() => {
        let articleList = this.$store.state.articles
        this.articleList = articleList
      })
    },
    getUserInfo () {
      this.$store.dispatch('getUserInfo')
      .then(() => {
        let userInfo = this.$store.state.userInfo
        this.userInfo = userInfo
        console.log(userInfo)
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

<template lang="html">
  <div>
    <headerComponent></headerComponent>
    <minHeader v-once></minHeader>
    <BodyComponent :articleList="articleList"></BodyComponent>
    <UserInfo :userInfo="userInfo" :socailContactList="socailContactList"></UserInfo>
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
      socailContactList: [],
      start: 0,
      sizePage: 10
    }
  },
  created () {
    this.getArticle()
    this.getUserInfo()
    this.getSocailContact()
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
      })
    },
    getSocailContact () {
      this.$store.dispatch('getSocailContact')
      .then(() => {
        let socailContactList = this.$store.state.socailContact
        this.socailContactList = socailContactList
        console.log(socailContactList)
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

<template lang="html">
  <div>
    <headerComponent></headerComponent>
    <minHeader v-once></minHeader>
    <BodyComponent :articles="articles"></BodyComponent>
    <UserInfo :userInfo="userInfo" :socailContact="socailContact"></UserInfo>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import headerComponent from '../common/Header'
import minHeader from '../common/MinHeader'
import BodyComponent from './Body'
import UserInfo from '../common/UserInfo'
import FooterComponent from '../common/Footer'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      skip: 0,
      limit: 10
    }
  },
  computed: mapState({
    articles: 'articles',
    userInfo: 'userInfo',
    socailContact: 'socailContact'
  }),
  created () {
    this.getArticle()
    this.getUserInfo()
    this.getSocailContact()
    this.getNavList()
  },
  methods: {
    getArticle () {
      this.$store.dispatch('getArticle', { limit: this.limit, skip: this.skip })
    },
    getUserInfo () {
      this.$store.dispatch('getUserInfo')
    },
    getSocailContact () {
      this.$store.dispatch('getSocailContact')
    },
    getNavList () {
      this.$store.dispatch('getNavList')
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

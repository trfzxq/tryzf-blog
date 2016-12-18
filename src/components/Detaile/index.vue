<template lang="html">
  <div>
    <headerComponent></headerComponent>
    <minHeader></minHeader>
    <BodyComponent></BodyComponent>
    <Comment></Comment>
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
import Comment from './Comment'

export default {
  data () {
    return {
    }
  },
  components: {
    headerComponent,
    minHeader,
    UserInfo,
    BodyComponent,
    FooterComponent,
    Comment
  }
}
</script>

<style lang="css">
</style>

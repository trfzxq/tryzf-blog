<template>
  <div id="app">
    <cHeader v-if="isHeader" :navList="navList" @searchHandler="search"/>
    <div class="view">
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear
        appear-active-class=null>
          <router-view class="animated"></router-view>
      </transition>
      <cFooter />
    </div>
  </div>
</template>

<script>
'use strict'
import cFooter from 'components/cFooter'
import cHeader from 'components/cHeader'
export default {
  name: 'app',
  computed: {
    navList () {
      return this.$store.state.navList
    },
    isHeader () {
      return this.$store.state.isHeader
    }
  },
  created () {
    this.getNavList()
  },
  methods: {
    getNavList () {
      this.$store.dispatch('getNavList')
    },
    search (key) {
      this.$store.dispatch('search', key)
    }
  },
  components: {
    cFooter,
    cHeader
  }
}
</script>

<style lang="scss" >
$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
@import '~animate.css';
@import './scss/toast.scss';
@import './scss/grid.scss';
.animated {
  animation-duration: .377s;
}
#cnzz_stat_icon_1261460333 {
  position:fixed;
  bottom:0;
}
</style>

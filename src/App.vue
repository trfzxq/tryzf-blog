<template>
  <div id="app">
    <cHeader :navList=navList @searchHandler = search />
    <div class="view">
      <transition
        mode="out-in"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
        appear
        appear-active-class=null>
          <router-view class="animated"></router-view>
      </transition>
    </div>
    <cFooter/>
  </div>
</template>

<script>
'use strict'
import cFooter from 'components/cFooter'
import cHeader from 'components/cHeader'
import NProgress from 'nprogress'
export default {
  name: 'app',
  computed: {
    navList () {
      return this.$store.state.navList
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
  watch: {
    progress (to) {
      NProgress.start()
      NProgress.set(to)
    }
  },
  components: {
    cFooter,
    cHeader
  }
}
</script>

<style lang="scss" >
@import '~animate.css';
.animated {
  animation-duration: .377s;
}
</style>

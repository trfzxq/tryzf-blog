<template lang="html">
  <div class="m-header">
    <figure class="m-bg" :style='{background:bg}'></figure>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: 'http://yumemor.com/hexo-theme-varaint/banner/4.jpg'
    }
  },
  computed: {
    bg () {
      let src = require('../../assets/img/4.jpg')
      return 'url(' + src + ')'
    }
  },
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
  .m-header {
    height: 500px;
    overflow: hidden;
  }
  figure {
    width:100%;
    height: 100%;
    background-size:cover;
  }
</style>

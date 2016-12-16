<template lang="html">
  <header>
    <div class="col-sm-5">
      <a id="logo" class="col-sm-5">
        <img :src="logo"/>
      </a>
    </div>
    <div class="header-right col-sm-7">
      <Search class="Search"></Search>
      <NavCompoent :navData="navData" class="NavCompoent"></NavCompoent>
    </div>
  </header>
</template>

<script>
import NavCompoent from './Nav'
import Search from './Search'
export default {
  data () {
    return {
      logo: 'http://yumemor.com/hexo-theme-varaint/favicon.png',
      navData: [
        {
          path: '/1',
          title: '菜单-1'
        },
        {
          path: '/2',
          title: '菜单-2'
        },
        {
          path: '/3',
          title: '菜单-3'
        }
      ]
    }
  },
  computed: {
  },
  ready () {},
  attached () {},
  methods: {
  },
  components: {
    NavCompoent,
    Search
  }
}
</script>

<style lang="css" scoped>
  header {
    position: relative;
    height:80px;
    line-height: 80px;
    background:rgba(255,255,255,0.3);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);
  }
  .header-right {
    padding-top:10px;
    text-align: right;
  }
  .Search, .NavCompoent{
    margin-right:30px;
    cursor: pointer;
  }
</style>

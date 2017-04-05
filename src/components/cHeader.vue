<template>
  <header class="row font-header">
    <section class="col-1 logo_box">
      <a href="/">
        <img src="http://7xslk1.com2.z0.glb.qiniucdn.com/logo_2.png" class="logo">
      </a>
    </section>
    <section class="col-10">
      <router-link :to="item.path" class="nav_tag" v-for='item in navList' key="item._id">
        {{ item.text }}
      </router-link>
    </section>
    <section class="col-1 search-icon">
      <i class="fa fa-search search" @click="showSearch"></i>
    </section>
    <section class="col-12 search-main fadeIn animated" v-if="isSearchShow">
      <div class="search_input__box">
        <input type="search" v-model="searchKey" placeholder="搜索文章">
        <button type="button" @click="search">搜索</button>
      </div>
    </section>
  </header>
</template>
<script>
export default {
  props: ['navList'],
  data () {
    return {
      isSearchShow: false,
      searchKey: ''
    }
  },
  methods: {
    showSearch () {
      this.isSearchShow = !this.isSearchShow
    },
    search () {
      this.$emit('searchHandler', this.searchKey)
      this.isSearchShow = false
    }
  }
}
</script>
<style lang="scss">
  @import '../scss/grid.scss';
  @import '../scss/variable';
  .font-header {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background:$menuBg;
    box-shadow:1px 2px 4px #ccc;
    .router-link-active {
      background:none;
    }
    .search {
      font-size:12px;
      color:#eee;
      cursor:pointer;
      &:active{
        color:#eee;
      }
    }
    .search-icon {
      text-align:center;
    }
    .search-main {
      background:#fff;
      box-shadow:1px 1px 4px #ccc;
    }
    .search_input__box{
      text-align:center;
      padding:10px 0;
      button {
        color:#fff;
        background:#5cadff;
        border:1px solid #d7dde4;
        border-top-right-radius: 50px;
        border-bottom-right-radius:50px;
        height:42px;
        padding:0 40px;
        position:relative;
        left:-60px;
        cursor:pointer;
        &:focus{
          outline:none;
        }
        &:active{
          background:#3091f2;
        }
      }
      input {
        width: 50%;
        border-radius:50px;
        height:40px;
        border:1px solid #d7dde4;
        padding-left:20px;
        color:#ccc;
        &:focus{
          outline:none;
        }
      }
    }

    .logo_box {
      text-align:center;
      height:100%;
    }
    .logo {
      width: 40px;
      height: 16px;
    }

    .nav_tag{
      color:$navTextColor;
      font-size:12px;
      font-weight:bold;
      margin-right:30px;
      &:hover {
        color:#fff;
      }
    }
  }
</style>

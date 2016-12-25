<template lang="html">
  <div class="backstage-main">
    <div class="left-module col-sm-2">
      <div class="logo">
        欢迎进入博客后台
      </div>
      <ul class="nav_list">
        <li v-for="item in navList" key="item.id">
          <router-link :to="item.path">
            <i :class="item.icon" class="icon"></i>
            <span class="nav_title">{{ item.text }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="right-module col-sm-10">
      <div class="right-module_header">
        <div class="pull-left to_greet">
          <router-link to="/" active-class="fire-action">
            <i class="glyphicon glyphicon-home go-home" title="返回首页"></i>
          </router-link>
          <i class="glyphicon glyphicon-off mrgL30"></i>
        </div>
        <div class="pull-right">
          <figure>
            <figcaption>
              上午好，{{ userInfo.username }} ~
            </figcaption>
            <img :src="userInfo.headURL"/>
          </figure>
        </div>
      </div>
      <div class="right-module_main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          text: '发表博客',
          path: '/backstage/write',
          icon: 'glyphicon glyphicon-pencil'
        },
        {
          text: '所有文章',
          path: '/backstage/articleList',
          icon: 'glyphicon glyphicon-list'
        },
        {
          text: '设置',
          path: '/backstage/setting',
          icon: 'glyphicon glyphicon-cog'
        }
      ]
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  .backstage-main {
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
  .left-module {
    padding: 0;
    background:#1d2b35;
    min-height: 100%;
  }
  .left-module .logo {
    height: 80px;
    line-height: 80px;
    background-color: #27cacc;
    color:#fff;
    font-size: 20px;
    text-align: center;
  }
  .nav_list li a {
    padding:30px 0;
    display: block;
  }
  .nav_list li a:hover {
    background: #546573;
    color:#fff;
  }
  .router-link-active {
    background: #2d3f4d;
    color:#fff;
  }
  .nav_list .icon {
    display: block;
    text-align: center;
    font-size:40px;
    margin-bottom:10px;
  }
  .nav_list a:hover {
    text-decoration: none;
  }
  .nav_title {
    display: block;
    text-align: center;
    color:#b5a9a9;
  }
  .right-module {
    padding: 0;
  }
  .right-module_header {
    height: 80px;
    line-height: 80px;
    background:#eef3f7;
    width: 100%;
    overflow: hidden;
    box-shadow: 1px 2px 4px #ccc;
  }
  .right-module_header figure {
    margin-right: 60px;
  }
  .right-module_header figure img {
    width:50px;
    height: 50px;
    border-radius: 50%;
  }
  .right-module_header figcaption {
    display: inline;
    color:#000;
    font-size:16px;
    margin-right: 10px;
  }
  .to_greet {
    font-size:30px;
    color:#797070;
    margin-left: 30px;
  }
  .right-module_main {
    width: 100%;
    padding: 40px;
  }
  .go-home{
    transition:all 1s;
    background: none;
  }
  .go-home:hover {
    color:red;
  }
  .mrgL30 {
    margin-left: 30px;
  }
</style>

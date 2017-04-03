<template>
  <div>
    <header class="row backend-header">
      <section class="col-2 title">
        Tryzf's blog 后台
      </section>
      <div class="col-10 info">
        <span class="backend-header_icon__group">
          <i class="fa fa-home" @click="goHome"></i>
          <i class="fa fa-sign-out" @click="signOut"></i>
        </span>
        <figure class="fr head-pic_box">
          <figcaption class="fl">
            {{ getTime }}好，{{ userInfo.username }}
          </figcaption>
          <img :src="userInfo.headURL" class="fl">
        </figure>
      </div>
    </header>
    <main class="row">
      <aside class="col-2 menu_container">
        <router-link :to="item.path" v-for ="item in menu" key="item.path">
          <i :class="item.icon"></i>
          <span>{{ item.text }}</span>
        </router-link>
      </aside>
      <section class="col-10 main_container">
        <transition
          mode="out-in"
          enter-active-class="fadeIn"
          leave-active-class="fadeOut"
          appear
          appear-active-class=null>
            <router-view class="animated"></router-view>
        </transition>
      </section>
    </main>
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        menu: [
          {
            path: '/backend/pulish',
            icon: 'fa fa-pencil',
            text: '发表文章'
          },
          {
            path: '/backend/manage',
            icon: 'fa fa-list',
            text: '文章管理'
          },
          {
            path: '/backend/setting',
            icon: 'fa fa-cog',
            text: '博客设置'
          }
        ]
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      },
      getTime () {
        return moment().locale('zh-cn').format('a')
      }
    },
    methods: {
      signOut () {
        this.$store.dispatch('signout').then(() => {
          this.$router.push({path: '/login'})
        })
      },
      goHome () {
        this.$router.push({path: '/'})
      }
    }
  }
</script>
<style lang="scss">
@import '../../scss/form.scss';
@import '../../scss/modal.scss';
.router-link-active {
  background:#546573;
  i {
    color:#fff;
  }
}
.head-pic_box {
  padding: 0 10px;
  img {
    width:50px;
    height:50px;
    border-radius:50%;
    margin-left: 10px;
  }
}
.backend-header_icon__group {
  padding: 0 20px;
  i {
    font-size:30px;
    color:#546573;
    margin-right:30px;
    cursor:pointer;
    position:relative;
    top:4px;
  }
}
.backend-header {
  height: 60px;
  line-height:60px;
  .title {
    background: #27cacc;
    color:#fff;
    text-align:center;
    height:100%;
    font-weight:bold;
    font-size:20px;
  }
  .info {
    background:#eef3f7;
    height:100%;
    box-shadow:1px 2px 4px #ccc;
    voerflow:hidden;
  }
}
.menu_container {
  background:#2d3f4d;
  .fa {
    margin:0;
  }
  a {
    display:block;
    text-align:center;
    color:#337ab7;
    padding:30px 0;
    i {
      font-size: 40px;
      margin-bottom:10px;
      &:hover {
        color:#fff;
      }
    }
    span {
      display:block;
      color:#b5a9a9;
    }
  }
}
.main_container {
  padding:20px;
  box-sizing:border-box;
}
</style>

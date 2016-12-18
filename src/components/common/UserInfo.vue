<template lang="html">
  <div class="user_info_box col-xs-12">
    <div class="col-xs-10 col-xs-offset-1">
      <div class="col-sm-8">
        <figure class="col-sm-3">
          <img :src="userInfo.header_pic" class="user_head_pic"/>
        </figure>
        <div class="col-sm-8">
          <h1 class="name">{{ userInfo.name }}</h1>
          <h3 class="motto">{{ userInfo.motto }}</h3>
        </div>
      </div>
      <div class="col-sm-4">
        <ul class="socail-contact_ul">
          <li v-for="item in socialContact" key>
            <router-link :to="item.path"><img :src="item.icon" v-if="item.isAction"/></router-link>
          </li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        header_pic: 'http://tse1.mm.bing.net/th?&id=OIP.M844b52af945b806e0ac715466e436b67o0&w=300&h=225&c=0&pid=1.9&rs=0&p=0&r=0',
        name: 'motto',
        motto: 'Server the people'
      },
      socialContact: [
        {
          icon: require('assets/img/github.png'),
          path: 'www.github.com',
          isAction: true
        },
        {
          icon: require('assets/img/wb.png'),
          path: 'www.weibo.com',
          isAction: true
        },
        {
          icon: require('assets/img/wx.png'),
          path: 'www.weixin.com',
          isAction: true
        }
      ]
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  .user_info_box {
    background:#fafafa;
    padding:60px 0;
  }
  .user_head_pic {
    width:100px;
    height:100px;
    border-radius: 50%;
  }
  .name {
    font-size:50px;
  }
  .motto {
    font-size:18px;
    color:#aaa;
  }
  .socail-contact_ul {
    overflow: hidden;
    margin-top: 25px;
  }
  .socail-contact_ul li {
    float: left;
    margin-right:10px;
  }
  .socail-contact_ul img {
    width:30px;
    height:30px;
  }
</style>

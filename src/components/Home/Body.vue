<template lang="html">
  <div class="article-title_list">
    <ul class="col-xs-8 col-xs-offset-2 title_list">
      <li v-for="item in articleList" key>
        <router-link :to = "item.id">
          <i v-if="item.isNew"  class="glyphicon glyphicon-heart-empty"></i>
          <h2 class="article_title">
            <span class="title">{{ item.title }}</span>
            <time class="time">{{ item.time }}</time>
          </h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleList: [
        {
          id: '1abc',
          isNew: false,
          title: 'Hello world',
          time: '2016-12-15'
        },
        {
          id: '1abc',
          isNew: false,
          title: 'Hello world',
          time: '2016-12-15'
        },
        {
          id: '1abc',
          isNew: false,
          title: 'Hello world',
          time: '2016-12-15'
        },
        {
          id: '1abc',
          isNew: false,
          title: 'Hello world',
          time: '2016-12-15'
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

<style lang="css">
  .article-title_list {
    margin-top:60px;
    margin-bottom:60px;
    overflow: hidden;
  }
  .title_list i {
    float: left;
    margin-right:10px;
  }
  .title_list li {
    width:100%;
    font-size:18px;
    overflow: hidden;
    position: relative;
    color:#777;
    margin-bottom:30px;
  }
  .title_list li a {
    color:#777;
  }
  .title {
    background:#fff;
    position: relative;
  }
  .title::before {
    content: '';
    position: absolute;
    top:9px;
    left:110%;
    width:800px;
    border-top:1px solid #eee;
    z-index:99;
  }
  .time {
    position: absolute;
    right:0;
    top:3px;
    padding-left:10px;
    background: #fff;
    z-index:9999999;
    font-size:11px;
    letter-spacing:1px;
  }
</style>

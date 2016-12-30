<template lang="html">
  <div class="article-title_list">
    <ul class="col-xs-8 col-xs-offset-2 article-list_ul">
      <li v-for="item in articlesList" :key="item.id">
        <router-link :to="'/article/' + item._id" class="title">{{ item.title }}</router-link>
        <time class="time">{{ item.date }}</time>
        <article class="abstract">
          {{ item.content }}
        </article>
        <div class="article-info clearfix">
          <div class="pull-left article-author">
            <i class="glyphicon glyphicon-user"></i>
              {{ item.author }}
          </div>
          <div class="pull-left article-type">
            <i class="glyphicon glyphicon-tags"></i>
            <span v-for="type in item.types">
              <router-link :to="type">{{ type }}</router-link>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['articles'],
  computed: {
    articlesList: function () {
      let newArticles = []
      if (this.articles.length) {
        this.articles.forEach((item) => {
          item.date = moment(new Date(item.date)).locale('zh-cn').calendar()
          newArticles.push(item)
        })
      }
      return newArticles
    }
  }
}
</script>

<style lang="css" scoped>
  .article-list_ul li {
    margin-bottom: 60px;
  }
  .time {
    font-weight: bold;
    color:#555;
    font-size:12px;
    display: block;
    margin-bottom:5px;
    letter-spacing:2px;
    margin-top: 10px;
  }
  .title {
    color:#2c3e50;
    margin: 10px 0 20px 0;
    font-size:23px;
  }
  .abstract {
    color:#7f8c8d;
    line-height: 1.9;
    font-size:16px;
  }
  .article-info {
    border-top:1px dashed #eee;
    border-bottom:1px dashed #eee;
    height:42px;
    line-height: 42px;
    margin-top:20px;
    padding-left:10px;
  }
  .article-author {
    color:#7f8c8d;
    font-size:10px;
  }
  .article-author i {
    margin-right: 6px;
  }
  .article-type {
    margin-left:30px;
    color:#7f8c8d;
    font-size:10px;
  }
  .article-type i {
    margin-right:6px;
  }
  .article-type a {
    color:#7f8c8d;
    position: relative;
    margin-right: 10px;
  }
  .article-type a::before {
    content: '、';
    position: absolute;
    left:100%;
  }
  .article-type span:last-child a::before{
    content: "";
  }
</style>

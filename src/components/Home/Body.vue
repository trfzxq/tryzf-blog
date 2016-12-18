<template lang="html">
  <div class="article-title_list">
    <ul class="col-xs-8 col-xs-offset-2 article-list_ul">
      <li v-for="item in articleList" :key="item.id">
        <router-link :to="'/article/' + item.id" class="title">{{ item.title }}</router-link>
        <time class="time">{{ item.time }}</time>
        <article class="abstract">
          {{ item.abstract }}
        </article>
        <div class="article-info clearfix">
          <div class="pull-left article-author">
            <i class="glyphicon glyphicon-user"></i>
              {{ item.articleInfo.author }}
          </div>
          <div class="pull-left article-type">
            <i class="glyphicon glyphicon-tags"></i>
            <span v-for="type in item.articleInfo.types">
              <router-link :to="type.path">{{ type.text }}</router-link>
            </span>
          </div>
        </div>
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
          title: '大白讲故事之诡异钥匙丢失',
          time: '2016-12-15',
          abstract: '建议尽可能使用 v-for 来提供 key ，除非迭代 DOM 内容足够简单，或者你是故意要依赖于默认行为来获得性能提升。因为它是 Vue 识别节点的一个通用机制， key 并不特别与 v-for 关联，key 还具有其他用途，我们将在后面的指南中看到其他用途。',
          articleInfo: {
            author: 'tryzf',
            types: [
              {
                text: 'css',
                path: '/css?sdsdd'
              },
              {
                text: 'html',
                path: 'html?sdfs'
              }
            ]
          }
        },
        {
          id: '1abc',
          title: '大白讲故事之诡异钥匙丢失',
          time: '2016-12-15',
          abstract: '建议尽可能使用 v-for 来提供 key ，除非迭代 DOM 内容足够简单，或者你是故意要依赖于默认行为来获得性能提升。因为它是 Vue 识别节点的一个通用机制， key 并不特别与 v-for 关联，key 还具有其他用途，我们将在后面的指南中看到其他用途。',
          articleInfo: {
            author: 'tryzf',
            types: [
              {
                text: 'css',
                path: '/css?sdsdd'
              },
              {
                text: 'html',
                path: 'html?sdfs'
              }
            ]
          }
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
    text-indent: 2rem;
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

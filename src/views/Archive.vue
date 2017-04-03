<template>
  <div>
    <main class="container archive-box">
      <ul class="archive-ul">
        <li v-for="item in articleList">
          <router-link :to="'/detaile/' + item._id" class="article_title_box">
            <i class="fa fa-paint-brush"></i>
            <span class="article_title">{{ item.title }}</span>
            <span class="fr time">{{ item.date }}</span>
          </router-link>
        </li>
      </ul>
      <Pager :limit="limit" ref="pager" class="archive_pager"></Pager>
    </main>
  </div>
</template>

<script>
  import Pager from 'components/Pager'
  import moment from 'moment'
  export default {
    data () {
      return {
        limit: 10
      }
    },
    computed: {
      articleList () {
        let newArticleList = []
        if (this.$store.state.articleList) {
          this.$store.state.articleList.forEach((item) => {
            item.date = moment(new Date(item.date)).locale('zh-cn').calendar()
            newArticleList.push(item)
          })
        }
        return newArticleList
      }
    },
    created () {
      this.getArticleList(this.$store.state.currPage)
    },
    methods: {
      getArticleList (skip) {
        this.$store.dispatch('getArticleList', {limit: this.limit, skip: skip})
      }
    },
    components: {
      Pager
    }
  }
</script>
<style lang="scss" >
.archive-box {
  padding: 60px 0;
}
.archive-ul {
  list-style:none;
  li {
    border-bottom:1px dashed #ccc;
    padding: 12px;
    border-radius:4px;
    transition: all .6s;
    .time {
      color:#ccc;
    }
    a{
      display:block;
    }
    &:hover {
      background:#eee;
    }
  }
  .article_title_box {
    color:#4c5157;
    i {
      color:#a4a4a4;
    }
  }
}
.archive_pager {
  margin:30px 0;
  overflow:hidden;
}
</style>

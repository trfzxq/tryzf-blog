<template>
  <div>
    <cUserInfo :userInfo="userInfo" :socailContact="socailContact" />
    <main class="container article_container">
      <article v-for="item in articleList">
        <router-link :to="'/detaile/' + item._id" class="article_title_box">
          <h1 class="article_title">{{ item.title }}</h1>
        </router-link>
        <section class="article_info">
          <div class="bottom_border">
            <i class="fa fa-user-o">
              {{ item.author }}
            </i>
            <i class="fa fa-clock-o">
              {{ item.date }}
            </i>
          </div>
        </section>
        <section v-html="item.content" class="article_content"></section>
        <section class="article_tags">
          <i class="fa fa-tags"></i>
          <span v-for="i in item.types">{{ i }}</span>
        </section>
      </article>
      <section class="button_box" v-if="isLoadBtn">
        <button type='button' class="load-some_btn" @click="loadSomeArticle">加载更多</button>
      </section>
    </main>
    <Top />
  </div>
</template>

<script>
  import cUserInfo from 'components/cUserInfo'
  import Top from 'components/Top'
  function preFetch (store) {
    return store.dispatch('getArticle', { limit: 3, skip: 1 })
  }
  export default {
    data () {
      return {
        skip: 1,
        limit: 3,
        isLoadBtn: true
      }
    },
    computed: {
      articleList () {
        return this.$store.getters.getArticleList
      },
      userInfo () {
        return this.$store.state.userInfo
      },
      socailContact () {
        return this.$store.state.socailContact
      }
    },
    created () {
      this.getUserInfo()
      this.getSocailContact()
    },
    beforeMount: function () {
      if (this.$root._isMounted) {
        preFetch(this.$store)
      }
    },
    preFetch: preFetch,
    methods: {
      getUserInfo () {
        this.$store.dispatch('getUserInfo')
      },
      getSocailContact () {
        this.$store.dispatch('getSocailContact')
      },
      loadSomeArticle () {
        console.log(this.$store.state.articlesTotal / this.limit)
        if ((this.$store.state.articlesTotal / this.limit) <= this.skip) {
          this.isLoadBtn = false
        }
        ++this.skip
        this.$store.dispatch('getArticle', { limit: this.limit, skip: this.skip })
      }
    },
    components: {
      cUserInfo,
      Top
    }
  }
</script>
<style lang="scss" >
@import '../scss/article';
@import '../scss/markdown.css';
@import '~highlight.js/styles/atom-one-light.css';
.article_container {
  padding: 20px 0;
}
.button_box {
  text-align:center;
  margin-bottom:40px;
}
.load-some_btn {
  border: 1px solid #D6D6D6;
  color: #ADADAD;
  border-radius: 50px;
  padding: 13px 25px;
  background:none;
  font-size: 20px;
  transition: color 0.2s ease-out,border 0.2s ease-out,opacity 0.2s ease-out;
  &:hover {
    border-color: #FFBE5B;
    color: #FFBE5B;
    cursor: pointer;
  }
  &:focus{
    outline:none;
  }
}
</style>

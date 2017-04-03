<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th>标题</th>
          <th>类型</th>
          <th>发表日期</th>
          <th>编辑</th>
        </tr>
      </thead>
      <tbody class="table-striped">
        <tr v-for="(item, index) in articleList">
          <td>{{ item.title }}</td>
          <td class="type_td">
            <span v-for="type in item.types">{{ type }}</span>
          </td>
          <td>{{ item.date }}</td>
          <td>
            <button class="btn btn-primary" @click="updateArticle(index)">更改</button>
            <button class="btn btn-danger" @click="removeArticle(index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pager :limit="limit" ref="pager"></Pager>
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
    },
    removeArticle (index) {
      let vm = this
      this.$modal({
        title: '正在删除文章',
        text: '将永远删除，是否继续？',
        sureFn: function () {
          vm.$store.dispatch('removeArticle', index)
          if (index === 0) {
            let skip = vm.$store.state.currPage - 1
            vm.getArticleList(skip)
            vm.$refs.pager.prev()
          }
        }
      })
    },
    updateArticle (index) {
      this.$store.dispatch('saveUpdateArticle', index)
      this.$router.push({path: '/backend/pulish'})
    }
  },
  components: {
    Pager
  }
}
</script>
<style lang="scss">
  .table {
    width:100%;
    border-collapse:collapse;
    .table-striped {
      tr: {
        outline: none;
      }
      tr:nth-of-type(odd) {
        background:#f9f9f9;
      }
      tr:hover {
        outline:1px solid #5cadff;
      }
      td {
        font-size:16px;
        color:#657180;
        text-align:center;
        padding:8px;
      }
    }
  }
</style>

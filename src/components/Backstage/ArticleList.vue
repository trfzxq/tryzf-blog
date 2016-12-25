<template lang="html">
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
            <button class="btn btn-primary" @click="removeArticle(index)">更改</button>
            <button class="btn btn-danger" @click="removeArticle(index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Pager :limit="limit" ref="pager"></Pager>
  </div>
</template>

<script>
import Pager from '../common/Pager'
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
      this.$store.state.articles.forEach((item) => {
        item.date = moment(item.date).locale('zh-cn').calendar()
        newArticleList.push(item)
      })
      return newArticleList
    }
  },
  created () {
    this.getArticleList(this.$store.state.currPage)
  },
  methods: {
    getArticleList (skip) {
      this.$store.dispatch('getArticle', {limit: this.limit, skip: skip})
    },
    removeArticle (index) {
      this.$store.dispatch('removeArticle', index)
      if (index === 0) {
        let skip = this.$store.state.currPage - 1
        this.getArticleList(skip)
        this.$refs.pager.prev()
      }
    },
    updateArticle () {

    }
  },
  components: {
    Pager
  }
}
</script>

<style lang="css">
thead th {
  font-size:20px;
}
.type_td span {
  display: inline-block;
  margin-right: 10px;
}
.table > tbody > tr > td {
  font-size:16px;
  vertical-align: inherit;
}
</style>

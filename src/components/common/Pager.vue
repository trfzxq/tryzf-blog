<template lang="html">
  <nav>
    <div v-if="!isTotal()">
      <h1>当前还没有数据</h1>
    </div>
    <ul class="pagination"  v-if="isTotal()">
      <li><a @click.prevent="prev()">&laquo;</a></li>
        <li v-if="pageSize <= limit" class="active">
          <a>1</a>
        </li>
      <template v-if="pageSize > limit">
        <li :class="{active: currPage == 1}"><a @click.prevent="changePage(1)">1</a></li>
        <li v-if="currPage - 3 > 1"><a @click.prevent="changePage(currPage-3)">……</a></li>
        <li v-if="currPage - 2 > 1"><a @click.prevent="changePage(currPage-2)">{{ currPage - 2 }}</a></li>
        <li v-if="currPage - 1 > 1"><a @click.prevent="changePage(currPage-1)">{{ currPage - 1 }}</a></li>
        <li class="active" v-if="currPage !== 1 && currPage !== pageSize"><a @click.prevent="changePage(currPage)">{{ currPage }}</a></li>
        <li v-if="currPage + 1 < pageSize"><a @click.prevent="changePage(currPage+1)">{{ currPage + 1 }}</a></li>
        <li v-if="currPage + 2 < pageSize"><a @click.prevent="changePage(currPage+2)">{{ currPage + 2 }}</a></li>
        <li v-if="currPage + 3 < pageSize"><a @click.prevent="changePage(currPage+3)">……</a></li>
        <li :class="{active: currPage === pageSize}"><a @click.prevent="changePage(pageSize)">{{ pageSize }}</a></li>
      </template>
      <li><a @click.prevent="next()">&raquo;</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['limit'],
  data () {
    return {
      isTotal: function () {
        return this.$store.state.articlesTotal !== 0
      }
    }
  },
  computed: {
    pageSize () {
      return Math.ceil(this.$store.state.articlesTotal / this.limit)
    },
    currPage () {
      return this.$store.state.currPage
    }
  },
  methods: {
    changePage (page) {
      if (this.currPage !== page) {
        this.$store.dispatch('setCurrPage', page)
        this.$parent.getArticleList(page)
      }
    },
    next () {
      if (this.currPage < this.pageSize) {
        this.changePage(this.currPage + 1)
      }
    },
    prev () {
      if (this.currPage > 1) {
        this.changePage(this.currPage - 1)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>

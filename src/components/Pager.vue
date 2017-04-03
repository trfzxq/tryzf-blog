<template lang="html">
  <nav v-if="isShow()" class="pagination-nav">
    <div v-if="!isTotal()">
      <h1>当前还没有数据</h1>
    </div>
    <ul class="pagination"  v-if="isTotal()">
      <li @click.prevent="prev()"><a>&laquo;</a></li>
      <li v-if="pageSize === 1" class="active">
        <a>1</a>
      </li>
      <template v-if="pageSize > 1">
        <li :class="{active: currPage == 1}" @click.prevent="changePage(1)"><a>1</a></li>
        <li v-if="currPage - 3 > 1" @click.prevent="changePage(currPage-3)"><a>……</a></li>
        <li v-if="currPage - 2 > 1" @click.prevent="changePage(currPage-2)"><a>{{ currPage - 2 }}</a></li>
        <li v-if="currPage - 1 > 1" @click.prevent="changePage(currPage-1)"><a>{{ currPage - 1 }}</a></li>
        <li class="active" v-if="currPage !== 1 && currPage !== pageSize" @click.prevent="changePage(currPage)"><a>{{ currPage }}</a></li>
        <li v-if="currPage + 1 < pageSize" @click.prevent="changePage(currPage+1)"><a>{{ currPage + 1 }}</a></li>
        <li v-if="currPage + 2 < pageSize" @click.prevent="changePage(currPage+2)"><a>{{ currPage + 2 }}</a></li>
        <li v-if="currPage + 3 < pageSize" @click.prevent="changePage(currPage+3)"><a>……</a></li>
        <li :class="{active: currPage === pageSize}" @click.prevent="changePage(pageSize)" ><a>{{ pageSize }}</a></li>
      </template>
      <li @click.prevent="next()"><a>&raquo;</a></li>
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
      },
      isShow: function () {
        return this.$store.state.pagerIsShow
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
      console.log('click change page')
      if (this.currPage !== page) {
        this.$store.dispatch('setCurrPage', page)
        this.$parent.getArticleList(page)
        document.body.scrollTop = 380
      }
    },
    next () {
      console.log('next pager')
      if (this.currPage < this.pageSize) {
        this.changePage(this.currPage + 1)
      }
    },
    prev () {
      console.log('prev pager')
      if (this.currPage > 1) {
        this.changePage(this.currPage - 1)
      }
    }
  }
}
</script>

<style lang="scss">
.pagination-nav {
  .pagination {
    list-style:none;
  }
  li {
    float:left;
    border:1px solid #d7dde4;
    background:#fff;
    text-align:center;
    min-width:32px;
    height:32px;
    line-height:32px;
    border-radius:4px;
    color:#657180;
    margin-left:4px;
  }
  li.active {
    background:#39f;
    border-color:#39f;
    color:#fff;
  }
  li:hover{
  cursor:pointer;
  transition:all .2s ease-in-out;
  border-color:#39f;
  color:#39f;
  }
}
</style>

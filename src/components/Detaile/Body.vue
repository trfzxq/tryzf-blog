<template lang="html">
  <div class="col-xs-8 col-xs-offset-2">
    <span class='title'>{{ articleDetaile.title }}</span>
    <article class="aritcle_content">
      {{ articleDetaile.article }}
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleDetaile: {
        title: '你懂的文章！！！',
        article: '文章的内容'
      }
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
  .title {
    font-size:20px;
    color:#666;
    border-bottom:1px solid #eee;
    padding:20px 0;
    font-weight: bold;
    letter-spacing: 3px;
  }
  .aritcle_content {
    font-size:16px;
    color:#666;
    margin:30px 0;
    letter-spacing: 2px;
    line-height: 1.5;
  }
  .aritcle_content p {
    text-indent: 2rem;
  }
</style>

<template lang="html">
  <div class="col-xs-8 col-xs-offset-2">
    <span class='title'>{{ article.title }}</span>
    <article class="aritcle_content" v-html="article.content">
    </article>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css" scoped>
  .title {
    font-size:30px;
    font-weight: bold;
    color:#666;
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

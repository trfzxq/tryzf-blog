<template>
  <aside class="user-info_container">
    <figure class="head-figure">
      <img :src="userInfo.headURL" class="head-figure_pic">
      <figcaption class="head-figure_title">{{ userInfo.blogTitle }}</figcaption>
      <span class="motto">{{ userInfo.motto }}</span>
    </figure>
    <section class="icon-group">
      <span v-for="item in socailContact" key="item._id">
        <a :href="item.path" class="icon_color"><i :class="item.src" v-if="item.isAction"></i></a>
      </span>
    </section>
  </aside>
</template>
<script>
  export default {
    name: 'userInfo',
    props: ['userInfo', 'socailContact']
  }
</script>
<style lang="scss" scoped>
  @import "../scss/variable";
  .user-info_container {
    background: $userInfoBg;
    padding: 60px 0;
  }
  .motto {
    color: $childTitle;
    font-size: 18px;
  }
  .head-figure {
    text-align:center;
  }
  .head-figure_pic {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }
  .head-figure_title {
    font-size:20px;
    color: $articleTitle;
    margin-top:10px;
  }
  .icon-group {
    text-align:center;
    font-size:26px;
    margin-top:10px;
    .icon_color {
      color:#5cadff;
    }
    a {
      margin: 6px;
    }
  }
</style>

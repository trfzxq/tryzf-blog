<template lang="html">
  <div>
    <div class="nav">
      <router-link to="/backstage/setting/pwd" active-class="nav-active">
        <i class="glyphicon glyphicon-lock"></i>
        密码修改
      </router-link>
      <router-link to="/backstage/setting/userInfo" active-class="nav-active">
        <i class="glyphicon glyphicon-user"></i>
        用户信息
      </router-link>
      <router-link to="/backstage/setting/nav" active-class="nav-active">
        <i class="glyphicon glyphicon-th-large"></i>
        导航栏
      </router-link>
      <router-link to="/backstage/setting/socailContact" active-class="nav-active">
        <i class="glyphicon glyphicon-glass"></i>
        社交管理
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="css" scoped>
.nav {
  border-top:1px dashed #eef3f7;
  border-bottom:1px dashed #eef3f7;
  margin-bottom: 30px;
}
.nav a {
  width: 24%;
  display: inline-block;
  padding:20px 0;
  font-size:20px;
  text-align: center;
  color:#1d2b35;
  transition:all 1s;
}
.nav a:hover, .nav-active{
  background: #27cacc;
  color:#fff;
  text-decoration: none;
}
.nav a.nav-active {
  color:#fff;
}
</style>

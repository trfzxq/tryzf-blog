<template lang="html">
  <div class="search-box">
    <input placeholder="搜索" :class="{active: isActive}"/>
    <i class="glyphicon glyphicon-search search-icon" @click="openSearch"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    openSearch () {
      this.isActive = !this.isActive
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
.search-box {
  display: inline;
}
.search-box input {
  width:0;
  opacity: 0;
  height: 40px;
  border-radius: 6px;
  border:1px solid #ccc;
  padding:0 10px;
  margin-right:20px;
  position: relative;
  top:-5px;
  transition:all 200ms ease-out;
}
.search-box .active {
  width:200px;
  opacity: 1;
}
.search-icon {
  font-size:20px;
}
</style>

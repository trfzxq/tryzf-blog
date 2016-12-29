<template lang="html">
  <div>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">
            <i class="glyphicon glyphicon-flag"></i>
          </div>
          <input class="form-control input-lg" type="text" placeholder="text" v-model="navList.text"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="glyphicon glyphicon-road"></i></div>
          <input class="form-control input-lg" type="text" placeholder="path" v-model="navList.path"/>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-lg" type="button" @click="addNav">添加</button>
      </div>
    </form>
    <div class="table-responsive mrgT30">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>名称</th>
            <th>路径</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody class="table-striped">
          <tr v-for="(item, index) in navList">
            <td>{{ item.text }}</td>
            <td>{{ item.path }}</td>
            <td>
              <button class="btn btn-danger" @click="removeNav(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    navList () {
      return this.$store.state.navList
    }
  },
  created () {
    if (!this.navList.length) {
      this.getNavList()
    }
  },
  methods: {
    removeNav (index) {
      this.$store.dispatch('removeNav', index)
    },
    addNav () {
      let data = {
        path: this.navList.path,
        text: this.navList.text
      }
      this.$store.dispatch('addNav', data)
    },
    getNavList () {
      this.$store.dispatch('getNavList')
    }
  },
  components: {}
}
</script>

<style lang="css">
.mrgT30 {
  margin-top: 30px;
}
</style>

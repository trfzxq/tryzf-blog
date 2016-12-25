<template lang="html">
  <div>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">
            <i class="glyphicon glyphicon-flag"></i>
          </div>
          <input class="form-control input-lg" type="text" placeholder="图标src" v-model="socailContact.src"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="glyphicon glyphicon-road"></i></div>
          <input class="form-control input-lg" type="text" placeholder="社交链接" v-model="socailContact.path"/>
        </div>
      </div>
      <div class="form-group">
        <input type="checkbox" v-model="socailContact.isAction"/>显示
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-lg" type="button" @click="save">添加</button>
      </div>
    </form>
    <div class="table-responsive mrgT30">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>icon路径</th>
            <th>社交链接</th>
            <th>显示状态</th>
            <th>管理</th>
          </tr>
        </thead>
        <tbody class="table-striped">
          <tr v-for="(item, index) in socailContact">
            <td>{{ item.src }}</td>
            <td>{{ item.path }}</td>
            <td>
              {{ item.isAction }}
            </td>
            <td>
              <button type="button" class="btn btn-danger" @click="remove(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  computed: {
    socailContact () {
      return this.$store.state.socailContact
    }
  },
  created () {
    if (!this.socailContact.length) {
      this.getSocailContact()
    }
  },
  methods: {
    remove (index) {
      this.$store.dispatch('removeSocailContact', index)
    },
    save () {
      let data = {
        src: this.socailContact.src,
        path: this.socailContact.path,
        isAction: this.socailContact.isAction || false
      }
      this.$store.dispatch('saveSocailContact', data)
    },
    getSocailContact () {
      this.$store.dispatch('getSocailContact')
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

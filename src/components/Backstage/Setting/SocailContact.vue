<template lang="html">
  <div>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">
            <i class="glyphicon glyphicon-flag"></i>
          </div>
          <input ref="src" class="form-control input-lg" type="text" placeholder="图标src"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="glyphicon glyphicon-road"></i></div>
          <input ref="path" class="form-control input-lg" type="text" placeholder="社交链接"/>
        </div>
      </div>
      <div class="form-group">
        <input type="checkbox" ref="isAction" /> 显示
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-lg visible-xs-12" type="button" @click="save">{{ buttonText }}</button>
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
          <tr v-for="(item, index) in socailContact" key="item.id" @click="getUpdateObj(index)">
            <td>{{ item.src }}</td>
            <td>{{ item.path }}</td>
            <td>
              {{ item.isAction }}
            </td>
            <td>
              <button type="button" class="btn btn-danger" @click.stop="remove(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'buttonText': '添加',
      'updateItemIndex': null,
      'isUpdate': false,
      'updateIndex': 0
    }
  },
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
    getNewSocailContactObj () {
      let data = {
        src: this.$refs.src.value,
        path: this.$refs.path.value,
        isAction: this.$refs.isAction.checked
      }
      return data
    },
    save (index) {
      let data = this.getNewSocailContactObj()
      if (this.isUpdate) {
        data._id = this.updateItemIndex
        let updateData = {
          data: data,
          index: this.updateIndex
        }
        this.$store.dispatch('updateSocailContact', updateData)
        .then(() => {
          this.buttonText = '添加'
          this.isUpdate = false
          this.$refs.src.value = ''
          this.$refs.path.value = ''
          this.$refs.isAction.checked = true
        })
      } else {
        this.$store.dispatch('saveSocailContact', data)
      }
    },
    getSocailContact () {
      this.$store.dispatch('getSocailContact')
    },
    getUpdateObj (index) {
      let indexValue = this.socailContact[index]
      this.$refs.src.value = indexValue.src
      this.$refs.path.value = indexValue.path
      this.$refs.isAction.checked = indexValue.isAction
      // 点击tr改变按钮文字与是否更改的标识,获取id
      this.isUpdate = true
      this.buttonText = '更改'
      this.updateIndex = index
      this.updateItemIndex = this.socailContact[index]._id
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

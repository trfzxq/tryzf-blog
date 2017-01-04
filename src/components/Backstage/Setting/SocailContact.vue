<template lang="html">
  <div>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">
            <i class="glyphicon glyphicon-flag"></i>
          </div>
          <input ref="src" class="form-control input-lg" type="text" placeholder="图标src" v-model="newSocailContact.src"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="glyphicon glyphicon-road"></i></div>
          <input ref="path" class="form-control input-lg" type="text" placeholder="社交链接" v-model="newSocailContact.path"/>
        </div>
      </div>
      <div class="form-group">
        <input type="checkbox" ref="checkbox" v-model="newSocailContact.isAction"/>显示
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
</template>

<script>
export default {
  data () {
    return {
      'newSocailContact': {
        src: '',
        path: '',
        isAction: true,
        isUpdate: false
      },
      'buttonText': '添加',
      'updateItemIndex': null
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
    save () {
      let data = {
        src: this.newSocailContact.src,
        path: this.newSocailContact.path,
        isAction: this.newSocailContact.isAction
      }
      if (this.newSocailContact.isUpdate) {
        data._id = this.updateItemIndex
        let putData = {
          data: data,
          newSocailContactList: this.socailContact
        }
        this.$store.dispatch('updateSocailContact', putData)
        .then(() => {
          this.buttonText = '添加'
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
      this.newSocailContact = indexValue

      this.newSocailContact.isUpdate = true
      this.buttonText = '更改'
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

<template lang="html">
  <div>
    <form class="form-inline">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="glyphicon glyphicon-road"></i></div>
          <input class="form-control input-lg" type="text" placeholder="path"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon">
            <i class="glyphicon glyphicon-flag"></i>
          </div>
          <input class="form-control input-lg" type="text" placeholder="text"/>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-lg">添加</button>
      </div>
    </form>
    <div class="table-responsive mrgT30">
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>路径</th>
            <th>名称</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody class="table-striped">
          <tr>
            <td>"/path"</td>
            <td>首页</td>
            <td>
              <button class="btn btn-danger">删除</button>
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
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.mrgT30 {
  margin-top: 30px;
}
</style>

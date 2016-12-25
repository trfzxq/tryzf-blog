<template lang="html">
  <form clsas="form">
    <div class="from-group mrgB10">
      <figure>
        <img src="http://tse1.mm.bing.net/th?&id=OIP.M4343cb2365f84528b061d4a7ec35fd9fo0&w=199&h=162&c=0&pid=1.9&rs=0&p=0&r=0"/>
      </figure>
    </div>
    <div clsas="form-group">
      <label>博客名</label>
      <input class="form-control mrgB10" type="text"/>
    </div>
    <div class="form-group">
      <label>座右铭</label>
      <textarea class="form-control mrgB10"></textarea>
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary">保存</button>
    </div>
  </form>
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

<style lang="css" scoped>
figure {
  text-align: center;
}
figure img {
  width:50px;
  height: 50px;
  border-radius: 50%;
}
.mrgB10 {
  margin-bottom:10px;
}
</style>

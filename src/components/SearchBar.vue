<template lang="html">
  <div>
    <input type="search" v-model="key" @keyup.enter='getWechat'/>
    <ul>
      <li v-for="item in arr">
        <div> {{ item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: 'hello',
      arr: []
    }
  },
  attached () {},
  methods: {
    getWechat () {
      var vm = this
      this.$store.dispatch('setResult', this.key).then((response) => {
        vm.arr = this.$store.state.result
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>

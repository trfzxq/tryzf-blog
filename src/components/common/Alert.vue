<template lang="html">
  <div v-if="!closed" transition="fade">
    <h1>标题</h1>
    <div>
      <i class="glyphicon glyphicon-ok-sign"></i>
      <i class="glyphicon glyphicon-question-sign"></i>
      <i class="glyphicon glyphicon-info-sign"></i>
      <i class="glyphicon glyphicon-remove-sign"></i>
      <i class="glyphicon glyphicon-exclamation-sign"></i>
      <span>
        message
      </span>
      <span @click="close">X</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      closed: false
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    close (e) {
      this.closed = true
      this.$emit('on-close', e)
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>

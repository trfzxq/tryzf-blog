<template lang="html">
  <div>
    <i :class="getType"></i>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    }
  },
  computed: {
    getType () {
      let classType = 'glyphicon glyphicon-info-sign info-color'
      switch (this.type) {
        case 'info':
          classType = 'glyphicon glyphicon-info-sign info-color'
          break
        case 'error':
          classType = 'glyphicon glyphicon-remove-sign error-color'
          break
        case 'warn':
          classType = 'glyphicon glyphicon-exclamation-sign warn-color'
          break
        case 'success':
          classType = 'glyphicon glyphicon-ok-sign success-color'
          break
        case 'question':
          classType = 'glyphicon glyphicon-question-sign question-color'
          break
        case 'exclamation':
          classType = 'glyphicon glyphicon-exclamation-sign exclamation-color'
      }
      return classType
    }
  }
}
</script>

<style lang="css" scoped>
.info-color {
  color:#3399ff;
}
.error-color {
  color:#d9534f;
}
.warn-color {
  color:#ff9900;
}
.success-color {
  color:#00cc66;
}
.question-color {
  color:#d9534f;
}
.exclamation-color {
  color:#5cadff;
}
</style>

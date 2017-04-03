<template lang="html">
  <div class="comment-box row">
    <button @click='toggleDuoshuoComments()' class="comment-button" :class="{hide: isHide}">
      <i class="glyphicon glyphicon-comment"></i>
      我要吐嘈
    </button>
    <div ref="duoshuo"></div>
  </div>
</template>

<script>
export default {
  props: ['comment'],
  data () {
    return {
      id: null,
      url: null,
      isHide: false
    }
  },
  mounted () {
    this.addScript()
  },
  beforeDestroy () {
    let ds = document.getElementById('duoshuo')
    let dsNotify = document.getElementById('ds-notify')
    ds && ds.parentNode.removeChild(ds)
    dsNotify && dsNotify.parentNode.removeChild(dsNotify)
  },
  methods: {
    addScript () {
      let ds = document.createElement('script')
      let bodyDOM = document.getElementsByTagName('body')[0]
      ds.id = 'duoshuo'
      ds.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js'
      ds.async = false
      bodyDOM.appendChild(ds)
    },
    toggleDuoshuoComments () {
      let id = this.comment._id
      let url = window.location.href
      let container = this.$refs.duoshuo
      let el = document.createElement('div')
      el.setAttribute('data-thread-key', id)
      el.setAttribute('data-url', url)
      window.DUOSHUO.EmbedThread(el)
      container.appendChild(el)
      this.isHide = true
    }
  }
}
</script>

<style lang="css" scoped>
.comment-button {
  color:#ccc;
  width:100%;
  background:none;
  border:1px solid #eee;
  border-radius: 4px;
  padding: 10px;
}
.comment-box {
  clear: both;
  margin-top:30px;
  margin-bottom:30px;
  border-top:1px dashed #eee;
  padding-top:30px;
}
</style>

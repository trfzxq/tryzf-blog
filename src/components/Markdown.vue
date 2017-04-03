<template lang="html">
  <textarea ref="markdownDOM" id="markdownDOM"></textarea>
</template>

<script>
import hljs from 'highlight.js'
export default {
  name: 'markdown',
  props: ['sourceContent'],
  data () {
    return {
      simplemde: null
    }
  },
  mounted () {
    this.created()
    if (this.sourceContent) {
      this.simplemde.value(this.sourceContent)
    } else {
      this.simplemde.value('')
    }
  },
  methods: {
    getMarkdownValue () {
      return this.simplemde.value()
    },
    getHtmlValue () {
      let value = this.simplemde.value()
      return this.simplemde.markdown(value)
    },
    clearSave () {
      this.simplemde.clearAutosavedValue()
    },
    created () {
      let SimpleMDE = require('simplemde')
      const simplemdeDOM = this.$refs.markdownDOM
      // simplemde 源码 return window.hljs.highlightAuto(code).value 所有我们必须把(hljs赋值给window)不然高亮无效
      window.hljs = hljs
      this.simplemde = new SimpleMDE({
        autodownloadfontawesome: false,
        element: simplemdeDOM,
        spellChecker: false,
        forceSync: true,
        autoDownloadFontAwesome: false,
        autosave: {
          enabled: true,
          unique_id: '#markdownDOM'
        },
        placeholder: 'Type here...',
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true
        }
      })
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import '~simplemde/dist/simplemde.min.css'
</style>

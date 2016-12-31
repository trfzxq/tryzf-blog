<template lang="html">
  <textarea ref="markdownDOM" id="markdownDOM"></textarea>
</template>

<script>
import SimpleMDE from 'simplemde'
import SimpleMDECSS from 'simplemde/dist/simplemde.min.css'
import hljs from 'highlight.js'
export default {
  name: 'markdown',
  data () {
    return {
      simplemde: null
    }
  },
  mounted () {
    this.created()
  },
  methods: {
    getValue () {
      let value = this.simplemde.value()
      return this.simplemde.markdown(value)
    },
    created () {
      const simplemdeDOM = this.$refs.markdownDOM
      // simplemde 源码 return window.hljs.highlightAuto(code).value 所有我们必须把(hljs赋值给window)不然高亮无效
      window.hljs = hljs
      this.simplemde = new SimpleMDE({
        autodownloadfontawesome: false,
        element: simplemdeDOM,
        spellChecker: false,
        forceSync: true,
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

<style lang="css" scoped>
</style>

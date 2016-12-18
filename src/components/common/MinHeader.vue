<template lang="html">
  <div class="m-header">
    <figure class="m-bg" :style='{background:bg}'></figure>
    <canvas id="canvas" class="canvas">你看不到我</canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    bg () {
      let src = require('assets/img/4.jpg')
      return 'url(' + src + ')'
    }
  },
  watch: {
    '$route': 'createCanvas'
  },
  mounted () {
    this.createCanvas()
  },
  methods: {
    createCanvas () {
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')
      canvas.width = canvas.parentNode.offsetWidth
      canvas.height = canvas.parentNode.offsetHeight
      var requestAnimFrame = (function () {
        return function (callback) {
          setTimeout(callback, 1000 / 60)
        }
      })()

      var step = 0
      var lines = [ 'rgba(255,255,255, 0.9)', 'rgba(255,255,255, 0.6)', 'rgba(255,255,255, 0.9)' ]
      function loop () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        step++
        for (var j = lines.length - 1; j >= 0; j--) {
          ctx.fillStyle = lines[j]
          var angle = (step + j * 45) * Math.PI / 180
          var deltaHeight = Math.sin(angle) * 50
          var deltaHeightRight = Math.cos(angle) * 50
          ctx.beginPath()
          ctx.moveTo(0, canvas.height / 2 + deltaHeight)
          /*
            绘制弧线 bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y)
          */
          ctx.bezierCurveTo(canvas.width / 2, canvas.height / 2 + deltaHeight - 150,
            canvas.width / 2, canvas.height / 2 + deltaHeightRight - 150,
            canvas.width, canvas.height / 2 + deltaHeightRight)
          ctx.lineTo(canvas.width, canvas.height)
          ctx.lineTo(0, canvas.height)
          ctx.lineTo(0, canvas.height / 2 + deltaHeight)
          ctx.closePath()
          ctx.fill()
        }
        requestAnimFrame(loop)
      }
      loop()
    }
  }
}
</script>

<style lang="css">
  .m-header {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
  }
  figure {
    width:100%;
    height: 100%;
    background-size:cover;
  }
  .canvas{
    width:100%;
    height:100px;
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;
  }
</style>

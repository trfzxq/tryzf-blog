<template>
  <aside class="top_component" @click="gotop" ref="gotop">
    <i class="fa fa-space-shuttle"></i>
  </aside>
</template>
<script>
export default {
  data () {
    return {
      time: null
    }
  },
  mounted () {
    this.scrollObj()
  },
  methods: {
    scrollObj () {
      let gotop = this.$refs.gotop
      window.onscroll = () => {
        let ostop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        let ch = document.documentElement.clientHeight || document.body.clientHeight
        if (ostop >= ch) {
          gotop.style.display = 'block'
        } else {
          gotop.style.display = 'none'
        }
      }
    },
    gotop () {
      let vm = this
      vm.timer = setInterval(() => {
        let ostop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        let speed = Math.ceil(ostop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = ostop - speed
        if (ostop === 0) {
          clearInterval(vm.timer)
        }
      })
    }
  }
}
</script>
<style lang="scss">
  .top_component{
    position:fixed;
    top:80%;
    right:30px;
    i {
      font-size:60px;
      transform: rotate(-90deg);
    }
  }
</style>

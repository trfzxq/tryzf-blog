<template lang="html">
  <div>
    <headerComponent class="headerComponent"></headerComponent>
    <minHeader></minHeader>
    <BodyComponent></BodyComponent>
  </div>
</template>

<script>
import headerComponent from './Header'
import minHeader from './MinHeader'
import BodyComponent from './Body'

export default {
  data () {
    return {
    }
  },
  components: {
    headerComponent,
    minHeader,
    BodyComponent
  }
}
</script>

<style lang="css" scoped>
  .headerComponent {
    position: fixed;
    top:0;
    left:0;
    width:100%;
  }
</style>

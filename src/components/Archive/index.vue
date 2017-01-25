<template lang="html">
  <div class="archive-list col-xs-8 col-xs-offset-2">
    <Timeline v-for="(item, index) in archiveList" :item="item" :index="index" :key="index" :year=item._id :articleList=item.articleList></Timeline>
  </div>
</template>

<script>
import Timeline from '../common/Timeline'
export default {
  date () {
    return {
      archiveList: []
    }
  },
  computed: {
    archiveList () {
      return this.$store.state.archiveList
    }
  },
  created () {
    this.getArchive()
  },
  methods: {
    getArchive () {
      this.$store.dispatch('getArchive').then(() => {
        console.log(this.$store.state)
      })
    }
  },
  components: {
    Timeline
  }
}
</script>

<style lang="css" scoped>
.archive-list {
  margin-bottom: 40px;
}
</style>

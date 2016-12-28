<template lang="html">
  <transition
    enter-class="option"
    enter-active-class="animated fadeInDown"
    leave-active-class="animated bounceOutRight"
    >
    <div class="ui-modal animated" v-if="show">
      <div class="ui-modal-header">
        <span class="ui-modal-title">温馨提示</span>
        <span class="ui-modal-close" @click="close">&times;</span>
      </div>
      <div class="ui-modal-body">
        <div class="ui-modal-text">
          <ui-icon :type="iconType" class="ui-modal-icon"></ui-icon>
          <h4 class="ui-modal-description">{{ message }}</h4>
        </div>
      </div>
      <div class="ui-modal-footer">
        <button class="btn btn-success" @click="ok">确定</button>
        <button class="btn btn-primary" @click="cancel">取消</button>
      </div>
    </div>
  </transition>
</template>

<script>
import UiIcon from './UiIcon.vue'
export default {
  data () {
    return {
      defaultShow: false,
      hasFadeInClass: this.show,
      hasFadeOutClass: false
    }
  },
  computed: {
    show () {
      return this.$store.state.modal.show
    },
    message () {
      return this.$store.state.modal.message
    },
    iconType () {
      return this.$store.state.modal.type
    },
    showClass () {
      return {
        'fadeInDown': this.$store.state.show,
        'fadeOutUp': !this.$store.state.show
      }
    }
  },
  methods: {
    close () {
      this.$store.dispatch('closeModal')
    },
    ok () {
      this.close()
      this.$store.state.modal.ok()
    },
    cancel () {
      this.close()
      this.$store.state.modal.cancel()
    }
  },
  components: {
    UiIcon
  }
}
</script>
<style lang="css" scoped>
.option {
  opacity: 0
}
.ui-modal {
  width:300px;
  box-shadow: 1px 1px 4px #ccc;
  padding: 0 6px;
  border:1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  z-index:999999999999999;
  position: fixed;
  top:20px;
  left:50%;
  margin-left: -150px;
  text-align: left;
  font-size:18px;
  background:#fff;
}
.ui-modal-header {
  overflow: hidden;
  padding: 10px 4px;
  border-bottom:1px solid #eee;
}
.ui-modal-title {
  float: left;
  font-size:14px;
  font-weight: bold;
  color:#464c5b;
}
.ui-modal-close {
  float:right;
  color:#ccc;
  cursor: pointer;
}
.ui-modal-text {
  padding:16px 4px;
}
.ui-modal-icon{
  display: inline;
  margin-right:4px;
  vertical-align: top;
}
.ui-modal-description{
  display: inline;
  color:#999;
}
.ui-modal-footer {
  text-align: right;
  border-top:1px solid #eee;
  padding:10px 0;
}
</style>

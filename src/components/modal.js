const Modal = {}

Modal.install = function (Vue, options) {
  Vue.prototype.$modal = (arg) => {
    let title = arg.title || 'modal'
    let type = arg.type || 'info'
    let text = arg.text || 'this is modal component'
    let sureFn = arg.sureFn || null
    let cancelFn = arg.cancelFn | null

    let template =
      `<div class="modal">
        <div class="modal-mask animated fadeIn" @click="cancelHandler" ref="mask"></div>
        <div class="modal-wrap animated fadeInDown" ref="modalWrap">
          <i class="fa fa-close modal-close" @click="cancelHandler"></i>
          <div class="modal-content_header ${type}">
            ${title}
          </div>
          <div class="modal-content_main">
            ${text}
          </div>
          <div class="modal-content_footer">
            <button class="btn btn-primary" @click="cancelHandler">取消</button>
            <button class="btn btn-danger" @click="sureHandler">确定</button>
          </div>
        </div>
      </div>`

    let ModalTpl = Vue.extend({
      template: template,
      methods: {
        sureHandler () {
          if (typeof sureFn === 'function') {
            sureFn()
          }
          let modalBox = this.$refs.modalWrap
          let modalMask = this.$refs.mask
          modalBox.classList.remove('fadeInDown')
          modalBox.classList.add('fadeOutUp')
          modalMask.classList.remove('fadeIn')
          modalMask.classList.add('fadeOut')
          setTimeout(() => {
            document.body.removeChild(tpl)
          }, 700)
        },
        cancelHandler: function () {
          if (typeof cancelFn === 'function') {
            cancelFn()
          }
          let modalBox = this.$refs.modalWrap
          let modalMask = this.$refs.modal
          modalBox.classList.remove('fadeInDown')
          modalBox.classList.add('fadeOutUp')
          modalMask.classList.remove('fadeIn')
          modalMask.classList.add('fadeOut')
          setTimeout(() => {
            document.body.removeChild(tpl)
          }, 700)
        }
      }
    })
    let tpl = new ModalTpl().$mount().$el
    document.body.appendChild(tpl)
  }
}

export default Modal

const Toast = {}

Toast.install = function (Vue, options) {
  let isFirst = true
  let ToastBox = null
  Vue.prototype.$toast = (toastOptions) => {
    let timeout = toastOptions.timeout || 1000
    let type = toastOptions.type || 'i'
    let typeIcon = {
      'e': 'times-circle',
      'i': 'info-circle',
      'w': 'exclamation-triangle',
      'q': 'question-circle',
      's': 'check-circle'
    }
    let template = `<div class="toast animated bounceInRight">
                      <div clsas="border-${type}">
                        <i class="fa fa-${typeIcon[type]} icon-${type}">
                          ${toastOptions.text}
                        </i>
                      </div>
                    </div>`
    let ToastTpl = Vue.extend({
      template: template
    })
    // $el
    let tpl = new ToastTpl().$mount().$el
    if (isFirst) {
      isFirst = false
      ToastBox = document.createElement('div')
      document.body.appendChild(ToastBox)
      ToastBox.appendChild(tpl)
    } else {
      ToastBox.appendChild(tpl)
    }

    setTimeout(() => {
      tpl.classList.remove('bounceInRight')
      setTimeout(() => {
        tpl.classList.add('bounceOutRight')
        setTimeout(() => {
          ToastBox.removeChild(tpl)
          if (ToastBox.childElementCount === 0) {
            document.body.removeChild(ToastBox)
            isFirst = true
          }
        }, 700)
      }, timeout)
    }, 700)
  }
}

module.exports = Toast

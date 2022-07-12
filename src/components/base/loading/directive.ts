import { createApp, Directive } from 'vue'
import Loading from './Loading.vue'

const VLoading: Directive = {
  beforeMount(el, binding) {},
  mounted(el, binding) {
    if (binding.value) {
      const div = document.createElement('div')
      const divStyle: Partial<CSSStyleDeclaration> = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: '999',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
      }
      Object.assign(div.style, divStyle)
      const loadingInstance = createApp(Loading, {})
      loadingInstance.mount(div)
      el.element = div
      el.loadingInstance = loadingInstance
      el.appendChild(div)
    }
  },
  updated(el, binding) {
    if (!binding.value) {
      el.loadingInstance.unmount()
      el.removeChild(el.element)
    }
  },
}

export default VLoading

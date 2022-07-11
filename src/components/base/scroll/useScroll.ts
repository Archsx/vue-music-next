import BScroll, { Options } from '@better-scroll/core'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import { onMounted, onUnmounted, ref, Ref } from 'vue'

export function useScroll(wrapper: Ref<null | HTMLElement>, options?: Options) {
  const scrollInstance: Ref<BScrollConstructor<{}> | null> = ref(null)
  onMounted(() => {
    if (wrapper.value) {
      scrollInstance.value = new BScroll(wrapper.value, options)
    }
  })
  onUnmounted(() => {
    scrollInstance.value?.destroy()
  })
  return scrollInstance
}

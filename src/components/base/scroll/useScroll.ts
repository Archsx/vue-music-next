import BScroll, { Options } from '@better-scroll/core'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
import { nextTick, onMounted, onUnmounted, ref, Ref } from 'vue'
import ObserveDom from '@better-scroll/observe-dom'

BScroll.use(ObserveDom)

export function useScroll(wrapper: Ref<null | HTMLElement>, options?: Options) {
  const scrollInstance: Ref<BScrollConstructor<{}> | null> = ref(null)
  onMounted(() => {
    // debugger
    if (wrapper.value) {
      scrollInstance.value = new BScroll(
        wrapper.value!,
        // 还是采用这种展开操作符的写法算了，看起来更简单点，效果和下面assign方法一样的
        {
          observeDOM: true,
          ...options,
        }
        // Object.assign(
        //   {
        //     observeDOM: true,
        //   },
        //   options
        // )
      )
    }
  })
  onUnmounted(() => {
    scrollInstance.value?.destroy()
  })
  return scrollInstance
}

import { onMounted, onUnmounted, ref, Ref } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll'
BScroll.use(Slide)

interface IPage {
  x: number
  y: number
  pageX: number
  pageY: number
}

interface useSliderReturnVal {
  slider: Ref<null | BScrollConstructor>
  currentPageIndex: Ref<number>
}

export function useSlider(
  wrapper: Ref<HTMLElement | null>
): useSliderReturnVal {
  // 其实这里我还不知道为什么要用ref去包裹slider
  const slider: Ref<null | BScrollConstructor<{}>> = ref(null)
  const currentPageIndex = ref(0)
  onMounted(() => {
    slider.value = wrapper.value
      ? new BScroll(wrapper.value, {
          scrollX: true,
          scrollY: false,
          slide: true,
          click: true,
          momentum: false,
          bounce: false,
          probeType: 2,
        })
      : slider.value
    if (slider.value) {
      slider.value.on('slideWillChange', (page: IPage) => {
        currentPageIndex.value = page.pageX
      })
    }
  })
  onUnmounted(() => {
    slider.value?.destroy()
  })
  return {
    slider,
    currentPageIndex,
  }
}

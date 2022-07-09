<template>
  <div class="bs__wrapper" ref="wrapper">
    <div class="bs__content">
      <div class="bs__item" v-for="(item, index) in sliderItems" :key="item.id">
        <img :src="item.pic" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ISliderItem } from '@/types'
import { defineComponent, nextTick, PropType, ref, Ref, watch } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
BScroll.use(Slide)

export default defineComponent({
  name: 'Slider',
  components: {},
  props: {
    sliderItems: {
      type: Array as PropType<Array<ISliderItem>>,
      default: () => [],
    },
  },
  setup(props) {
    const wrapper: Ref<null | HTMLDivElement> = ref(null)
    watch(
      () => props.sliderItems,
      () => {
        nextTick(() => {
          debugger
          const bscrollInstance = new BScroll(wrapper.value!, {
            scrollX: true,
            scrollY: false,
            slide: true,
          })
        })
      }
    )
    return {
      wrapper,
    }
  },
})
</script>

<style lang="scss" scoped>
.bs__wrapper {
  height: 100%;
  .bs__content {
    height: 100%;
    display: inline-flex;
    .bs__item {
      img {
        height: 100%;
        // width: 100%;
      }
    }
  }
}
</style>

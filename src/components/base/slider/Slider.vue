<template>
  <div class="box">
    <div class="bs__wrapper" ref="wrapper">
      <div class="bs__content">
        <div
          class="bs__item"
          v-for="(item, index) in sliderItems"
          :key="item.id"
        >
          <a :href="item.link">
            <img :src="item.pic" alt="" srcset="" />
          </a>
        </div>
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(item, index) in sliderItems"
        :key="item.id"
        :class="{ 'dot--active': currentPageIndex === index }"
      >
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ISliderItem } from '@/types'
import { defineComponent, nextTick, PropType, ref, Ref, watch } from 'vue'
import { useSlider } from './useSlider'

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
    const { slider, currentPageIndex } = useSlider(wrapper)
    // const currentPageIndex = ref(0)
    // watch(
    //   () => props.sliderItems,
    //   () => {
    //     nextTick(() => {
    //       const bscrollInstance = useSlider(wrapper)
    //       bscrollInstance.on('slideWillChange', (page: IPage) => {
    //         currentPageIndex.value = page.pageX
    //       })
    //     })
    //   }
    // )
    return {
      wrapper,
      currentPageIndex,
    }
  },
})
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  position: relative;
  .bs__wrapper {
    height: 100%;
    display: flex;
    .bs__content {
      height: 100%;
      flex-shrink: 0;
      display: flex;
      // display: inline-flex;
      .bs__item {
        a {
          display: block;
          height: 100%;
          img {
            height: 100%;
            width: 100%;
            // width: 100vw;
          }
        }
      }
    }
  }
  .dots-wrapper {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translate(-50%);
    // line-height: 12px;
    display: flex;
    column-gap: 8px;
    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: $color-theme-active;
      &--active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>

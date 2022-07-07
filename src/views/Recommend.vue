<template>
  <div class="bs__wrapper" ref="wrapper">
    <div class="bs__content" v-if="sliderItems.length">
      <div class="bs__item" v-for="(item, index) in sliderItems" :key="item.id">
        <img :src="item.pic" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, Ref } from 'vue'
import BScroll from '@better-scroll/core'
import { getRecommend } from '@/service/recommend'
import Slide from '@better-scroll/slide'
import { GetRecommendResponse, ISliderItem } from '@/types'
BScroll.use(Slide)

export default defineComponent({
  name: '',
  components: {},
  setup(props, { slots, emit, attrs }) {
    let sliderItems: Ref<Array<ISliderItem>> = ref([])
    const wrapper: Ref<null | HTMLDivElement> = ref(null)
    getRecommend<GetRecommendResponse>()
      .then((res) => {
        sliderItems.value = res.sliders
        nextTick(() => {
          const bscrollInstance = new BScroll(wrapper.value!, {
            scrollX: true,
          })
        })
      })
      .catch((err) => {
        console.log(err)
        //
      })
    return {
      sliderItems,
      wrapper,
    }
  },
})
</script>

<style lang="scss" scoped>
.bs__wrapper {
  width: 100%;
  padding-top: 40%;
  overflow: hidden;
  position: relative;
  height: 0;
  .bs__content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    .bs__item {
      width: 100vw;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>

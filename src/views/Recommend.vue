<template>
  <div class="wrapper">
    <div class="slider__wrapper">
      <slider :sliderItems="sliderItems"></slider>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, Ref } from 'vue'
import { getRecommend } from '@/service/recommend'
import { GetRecommendResponse, ISliderItem } from '@/types'
import Slider from '@/components/base/slider/Slider.vue'

export default defineComponent({
  name: '',
  components: { Slider },
  setup(props, { slots, emit, attrs }) {
    let sliderItems: Ref<Array<ISliderItem>> = ref([])
    getRecommend<GetRecommendResponse>()
      .then((res) => {
        sliderItems.value = res.sliders
      })
      .catch((err) => {
        console.log(err)
        //
      })
    return {
      sliderItems,
    }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  padding-top: 40%;
  overflow: hidden;
  position: relative;
  height: 0;
  .slider__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>

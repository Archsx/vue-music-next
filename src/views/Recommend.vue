<template>
  <div class="recommend">
    <scroll class="recommend-content">
      <div>
        <div class="wrapper">
          <div class="slider__wrapper">
            <slider
              :sliderItems="sliderItems"
              v-if="sliderItems.length"
            ></slider>
          </div>
        </div>
        <div class="recommend__list">
          <h1 class="list__title">热门歌单推荐</h1>
          <div class="scroll__container">
            <ul class="item__wrapper">
              <li v-for="(item, index) in albumItems" class="item">
                <div class="icon">
                  <img :src="item.pic" alt="" srcset="" />
                </div>
                <div class="description">
                  <h2 class="name">{{ item.username }}</h2>
                  <p class="sub-name">
                    {{ item.title }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref, Ref } from 'vue'
import { getRecommend } from '@/service/recommend'
import { GetRecommendResponse, IAlbumItem, ISliderItem } from '@/types'
import Slider from '@/components/base/slider/Slider.vue'
import Scroll from '@/components/base/scroll/Scroll.vue'

export default defineComponent({
  name: '',
  components: { Slider, Scroll },
  setup(props, { slots, emit, attrs }) {
    let sliderItems: Ref<Array<ISliderItem>> = ref([])
    let albumItems: Ref<Array<IAlbumItem>> = ref([])
    getRecommend<GetRecommendResponse>()
      .then((res) => {
        sliderItems.value = res.sliders
        albumItems.value = res.albums
      })
      .catch((err) => {
        console.log(err)
        //
      })
    return {
      sliderItems,
      albumItems,
    }
  },
})
</script>

<style lang="scss" scoped>
.recommend {
  position: absolute;
  top: 88px;
  left: 0;
  bottom: 0;
  right: 0;
  // display: flex;
  // flex-direction: column;
  &-content {
    height: 100%;
    overflow: hidden;
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
    .recommend__list {
      // flex-grow: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .list__title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: 14px;
        color: $color-theme;
      }
      .scroll__container {
        flex-grow: 1;
        overflow: hidden;
        .item__wrapper {
          display: flex;
          flex-direction: column;
          row-gap: 20px;
          padding: 10px 20px;

          .item {
            display: flex;
            column-gap: 20px;
            align-items: center;
            .icon {
              img {
                width: 60px;
                height: 60px;
              }
            }
            .description {
              .name {
                font-size: $font-size-medium;
                margin-bottom: 10px;
              }
              .sub-name {
                font-size: $font-size-medium;
                color: $color-text-d;
              }
            }
          }
        }
      }
    }
  }
}
</style>

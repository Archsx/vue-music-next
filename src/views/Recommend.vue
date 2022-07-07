<template></template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getRecommend } from '@/service/recommend'

interface ISliderItem {
  id: string
  pic: string
  link: string
}

interface IAlbumItem {
  id: number
  title: string
  pic: string
  username: string
}

export type GetRecommendResponse = [
  albums: Array<IAlbumItem>,
  sliders: Array<ISliderItem>
]

export default defineComponent({
  name: '',
  components: {},
  setup(props) {
    getRecommend<GetRecommendResponse>()
      .then((res) => {
        const [albums, sliders] = res
      })
      .catch((err) => {})
    return {}
  },
})
</script>

<style lang="" scoped></style>

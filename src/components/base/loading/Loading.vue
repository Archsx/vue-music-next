<template>
  <div class="loading__container">
    <img class="loading__pic" :src="imgPath" alt="" />
    <p class="loading__desc">{{ desc }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading',
  components: {},
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    desc: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const imgPath = require('@/assets/svg/loadingForComponent.gif')
    return {
      imgPath,
    }
  },
})
</script>

<style lang="scss" scoped>
.loading__container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .loading__pic {
    width: 40px;
    height: 40px;
  }
  .desc {
    line-height: 20px;
    font-size: $font-size-medium;
    color: $color-theme;
  }
}
</style>

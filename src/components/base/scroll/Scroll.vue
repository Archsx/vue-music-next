<template>
  <div class="scroll__wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { useScroll } from './useScroll'

export default defineComponent({
  name: 'Scroll',
  props: {
    click: {
      type: Boolean,
      default: true,
    },
  },
  components: {},
  setup(props) {
    const wrapper: Ref<HTMLDivElement | null> = ref(null)
    const scrollInstance = useScroll(wrapper, props)
    const refresh = () => {
      scrollInstance.value?.refresh()
    }
    return {
      wrapper,
      refresh,
    }
  },
})
</script>

<style lang="scss" scoped>
.scroll__wrapper {
  // width: 100%;
  // height: 100%;
}
</style>

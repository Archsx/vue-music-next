<template>
  <div class="scroll__wrapper" ref="wrapper">
    <div class="scroll__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import { useScroll } from './useScroll'

export default defineComponent({
  name: 'Scroll',
  components: {},
  setup(props) {
    const wrapper: Ref<HTMLDivElement | null> = ref(null)
    const scrollInstance = useScroll(wrapper)
    return {
      wrapper,
    }
  },
})
</script>

<style lang="scss" scoped>
.scroll__wrapper {
  width: 100%;
  height: 100%;
}
</style>

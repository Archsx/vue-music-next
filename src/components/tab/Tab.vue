<template>
  <div class="tab">
    <router-link
      class="tab__item"
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
      exact
    >
      <span class="tab__link"> {{ tab.name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ITabItem {
  name: string
  path: string
}

export default defineComponent({
  name: 'Tab',
  components: {},
  setup(props) {
    const tabs: Array<ITabItem> = [
      {
        name: '推荐',
        path: '/recommend',
      },
      {
        name: '歌手',
        path: '/singer',
      },
      {
        name: '排行',
        path: '/top-list',
      },
      {
        name: '搜索',
        path: '/search',
      },
    ]
    return {
      tabs,
    }
  },
})
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  height: 44px;
  &__item {
    flex-grow: 1;
    text-align: center;
    font-size: $font-size-medium;
    line-height: 44px;
    color: $color-theme;
    &.active {
      .tab__link {
        color: $color-theme-active;
        position: relative;
        &::after {
          content: '';
          width: 100%;
          height: 2px;
          background-color: $color-theme-active;
          position: absolute;
          left: 0;
          bottom: -6px;
        }
      }
    }
  }
}
</style>

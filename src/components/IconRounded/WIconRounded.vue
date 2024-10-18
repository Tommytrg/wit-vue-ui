<template>
  <div
    class="min-h-[74px] min-w-[74px] border border-black-950 w-min rounded-full bg-wit-blue-500 flex justify-center items-center"
    :class="{
      ['hover-effect']: !disableHoverEffect,
      ['icon-sized-container']: customSize,
      ['big-size']: bigSize
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  size: {
    type: Number,
    required: false
  },
  bigSize: {
    type: Boolean,
    default: false
  },
  disableHoverEffect: {
    type: Boolean,
    default: false
  }
})
const customSize = computed(() => props.size && props.size > 0)
const iconSize = computed(() => (props.size ? `${props.size - props.size * 0.45}px` : '40px'))
const containerSize = computed(() => `${props.size}px`)
</script>

<style lang="scss" scoped>
:deep(svg) {
  @apply w-[40px] h-auto;
}

:deep(path) {
  &:not(.fill-exluded) {
    @apply fill-black-950;
  }
}

.big-size {
  @apply min-h-[90px] min-w-[90px];

  :deep(svg) {
    @apply w-[60px] h-[60px];
  }
}

.icon-sized-container {
  @apply min-h-[v-bind(containerSize)] min-w-[v-bind(containerSize)];

  :deep(svg) {
    @apply w-[v-bind(iconSize)] h-[v-bind(iconSize)];
  }
}

.hover-effect {
  @apply hover:bg-wit-blue-300;
}
</style>

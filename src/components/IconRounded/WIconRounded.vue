<template>
  <div
    :class="{ ['hover-effect']: !disableHoverEffect }"
    class="icon-container border border-black-950 w-min rounded-full bg-wit-blue-500 flex justify-center items-center"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 70
  },
  disableHoverEffect: {
    type: Boolean,
    default: false
  }
})

const iconSize = computed(() => `${props.size - props.size * 0.4}px`)
const containerSize = computed(() => `${props.size}px`)
</script>

<style lang="scss" scoped>
:deep(svg) {
  @apply w-[v-bind(iconSize)] h-auto;
}
:deep(path) {
  @apply fill-black-950;
}

.icon-container {
  @apply min-h-[v-bind(containerSize)] min-w-[v-bind(containerSize)];
}
.hover-effect {
  @apply hover:bg-wit-blue-300;
}
</style>

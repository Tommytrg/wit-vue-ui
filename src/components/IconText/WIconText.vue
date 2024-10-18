<template>
  <a
    :href="link"
    :aria-label="text"
    target="_blank"
    class="flex items-center icon-container w-fit"
    :class="{ 'flex-col': position === IconTextPosition.Bottom }"
  >
    <WIconRounded v-if="rounded" class="rounded-icon" :class="textPositionClass" :size="iconSize">
      <slot></slot>
    </WIconRounded>

    <slot v-else></slot>

    <p
      class="text-link"
      :class="{ 'font-bold': bold, 'text-black-950': !dark, 'text-white-50': dark }"
    >
      {{ text }}
    </p>
  </a>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { iconTextPositions, IconTextPosition } from './WIconText'
import WIconRounded from '../IconRounded/WIconRounded.vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  dark: {
    type: Boolean,
    default: false
  },
  iconSize: {
    type: Number,
    required: false
  },
  link: {
    type: String,
    required: true
  },
  position: {
    type: String as PropType<IconTextPosition>,
    required: true,
    validator(value: unknown) {
      return iconTextPositions.includes(value as IconTextPosition)
    }
  },
  bold: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
})

const textPositionClass = computed(() => {
  return {
    'mr-md': props.position === IconTextPosition.Right,
    'mb-sm': props.position === IconTextPosition.Bottom
  }
})
</script>

<style lang="scss">
.rounded-icon {
  @apply bg-wit-blue-500 transition-colors;
}
.icon-container:hover > .rounded-icon {
  @apply bg-wit-blue-300;
}
</style>

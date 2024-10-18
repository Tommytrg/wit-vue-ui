<template>
  <div
    class="card border-2 bg-white-50 border-black-950 rounded-lg px-lg py-lg mr-sm mb-sm w-full h-full"
  >
    <div v-if="link" class="flex justify-between items-center">
      <h3 class="text-xl text-black-950 font-semibold leading-4">
        {{ title }}
      </h3>
      <AnimatedArrow v-if="link" :hover="hover" color="#C6C6C6" />
    </div>
    <div v-else class="text-xl text-black-950 font-semibold">
      <slot name="header"></slot>
    </div>
    <hr class="hr my-md" />
    <div class="text-sm text-black-950">
      <slot name="description"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import AnimatedArrow from '../AnimatedArrow/AnimatedArrow.vue'
defineProps({
  title: {
    type: String,
    required: false
  },
  hover: {
    type: Boolean,
    required: true
  },
  link: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="scss" scoped>
.hr {
  height: 3px; /* Modern Browsers */
  @apply bg-black-950;
}
</style>

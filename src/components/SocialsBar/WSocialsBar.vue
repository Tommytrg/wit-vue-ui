<template>
  <div
    class="opacity-60 hover:opacity-100 grid grid-rows-1 grid-flow-row content-center gap-y-md w-fit justify-items-center"
  >
    <IconExternalLink :url="SOCIAL_URLS.x" class="link">
      <WIcon :name="IconName.X" class="icon" />
    </IconExternalLink>
    <IconExternalLink :url="SOCIAL_URLS.telegram" class="link">
      <WIcon :name="IconName.Telegram" class="icon" />
    </IconExternalLink>
    <IconExternalLink :url="SOCIAL_URLS.discord" class="link">
      <WIcon :name="IconName.Discord" class="icon" />
    </IconExternalLink>
    <IconExternalLink :url="SOCIAL_URLS.github" class="link">
      <WIcon :name="IconName.Github" class="icon" />
    </IconExternalLink>

    <!-- TODO(#413): set width to 40px to avoid wrong alignment -->
    <div class="flex mt-3xl w-xl">
      <p class="text-sm font-light text-white-400 [writing-mode:vertical-lr] -rotate-180 subtitle">
        Enjoy Smart, Neutral,
      </p>
      <p class="text-sm font-light text-white-400 [writing-mode:vertical-lr] -rotate-180 subtitle">
        and Secure Data
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import WIcon from '../icon/WIcon.vue'
import { IconName } from '../icon/WIcon'
import IconExternalLink from './IconExternalLink.vue'
import { SOCIAL_URLS } from './WSocialsBar'
</script>

<style lang="scss" scoped>
.link {
  @apply justify-self-end;
}
.icon {
  @apply w-[18px] h-auto;
}
</style>

<template>
  <component :class="{ color: color }" :is="iconComponent" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed, DefineComponent, PropType, SVGAttributes } from 'vue'

import AdoIcon from '@/assets/svg/ado.svg?component'
import AppleIcon from '@/assets/svg/apple.svg?component'
import BitmartIcon from '@/assets/svg/bitmart.svg?component'
import ChangellyIcon from '@/assets/svg/changelly.svg?component'
import closeNavIcon from '@/assets/svg/close-nav.svg?component'
import DockerIcon from '@/assets/svg/docker.svg?component'
import EmptyStateIcon from '@/assets/svg/empty-state.svg?component'
import HamburguerIcon from '@/assets/svg/hamburguer.svg?component'
import LetsexchangeIcon from '@/assets/svg/letsexchange.svg?component'
import LinuxIcon from '@/assets/svg/linux.svg?component'
import MexcIcon from '@/assets/svg/mexc.svg?component'
import MyWitWalletIcon from '@/assets/svg/my-wit-wallet.svg?component'
import NavitagionCursorIcon from '@/assets/svg/navigation-cursor.svg?component'
import RaspberryIcon from '@/assets/svg/raspberry.svg?component'
import SheikahIcon from '@/assets/svg/sheikah.svg?component'
import SimpleswapIcon from '@/assets/svg/simpleswap.svg?component'
import WindowsIcon from '@/assets/svg/windows.svg?component'
import DiscordIcon from '@/assets/svg/discord.svg?component'
import GateIcon from '@/assets/svg/gate.svg?component'
import GithubIcon from '@/assets/svg/github.svg?component'
import RightArrowIcon from '@/assets/svg/icon-right-arrow.svg?component'
import TelegramIcon from '@/assets/svg/telegram.svg?component'
import XIcon from '@/assets/svg/x.svg?component'

import { iconNames, IconName } from './WIcon'

const props = defineProps({
  name: {
    type: String as PropType<IconName>,
    required: true,
    validator(value: unknown) {
      return iconNames.includes(value as IconName)
    }
  },
  color: {
    type: String
  }
})

const internalColor = computed(() => {
  return props.color || '#232323'
})

const icons: Record<IconName, DefineComponent<SVGAttributes>> = {
  [IconName.Ado]: AdoIcon,
  [IconName.Apple]: AppleIcon,
  [IconName.Bitmart]: BitmartIcon,
  [IconName.Changelly]: ChangellyIcon,
  [IconName.closeNav]: closeNavIcon,
  [IconName.Discord]: DiscordIcon,
  [IconName.Docker]: DockerIcon,
  [IconName.EmptyState]: EmptyStateIcon,
  [IconName.Gate]: GateIcon,
  [IconName.Github]: GithubIcon,
  [IconName.Hamburguer]: HamburguerIcon,
  [IconName.Letsexchange]: LetsexchangeIcon,
  [IconName.Linux]: LinuxIcon,
  [IconName.Mexc]: MexcIcon,
  [IconName.MyWitWallet]: MyWitWalletIcon,
  [IconName.NavitagionCursor]: NavitagionCursorIcon,
  [IconName.Raspberry]: RaspberryIcon,
  [IconName.RightArrow]: RightArrowIcon,
  [IconName.Sheikah]: SheikahIcon,
  [IconName.Simpleswap]: SimpleswapIcon,
  [IconName.Telegram]: TelegramIcon,
  [IconName.Windows]: WindowsIcon,
  [IconName.X]: XIcon
}

const iconComponent = computed(() => {
  return icons[props.name as IconName]
})
</script>

<style lang="scss" scoped>
.color {
  :deep(path) {
    &:not(.fill-exluded) {
      fill: v-bind(internalColor);
    }
  }
}
</style>

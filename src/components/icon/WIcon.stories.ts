import type { Meta, StoryObj } from '@storybook/vue3'
import WIcon from './WIcon.vue'
import { IconName } from './WIcon'

const meta: Meta<typeof WIcon> = {
  title: 'Example/WIcon',
  component: WIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        IconName.Ado,
        IconName.Apple,
        IconName.Bitmart,
        IconName.Changelly,
        IconName.closeNav,
        IconName.Dextools,
        IconName.Discord,
        IconName.Docker,
        IconName.EmptyState,
        IconName.Gate,
        IconName.Github,
        IconName.Hamburguer,
        IconName.Letsexchange,
        IconName.Linux,
        IconName.Mexc,
        IconName.MyWitWallet,
        IconName.NavitagionCursor,
        IconName.Oneinch,
        IconName.Pancakeswap,
        IconName.Raspberry,
        IconName.RightArrow,
        IconName.Sheikah,
        IconName.Simpleswap,
        IconName.Telegram,
        IconName.Uniswap,
        IconName.Windows,
        IconName.X
      ]
    }
  },
  args: {}
} satisfies Meta<typeof WIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Ado: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Ado
    // color: 'black'
  }
}
export const Apple: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Apple,
    color: 'black'
  }
}
export const Bitmart: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Bitmart
  }
}
export const Changelly: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Changelly
  }
}
export const CloseNav: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.closeNav
  }
}
export const Discord: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args"  />`
  }),
  args: {
    name: IconName.Discord
  }
}
export const Docker: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Docker
  }
}
export const EmptyState: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.EmptyState
  }
}
export const Gate: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Gate
  }
}
export const Github: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Github
  }
}
export const Hamburguer: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Hamburguer
  }
}
export const Letsexchange: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Letsexchange
  }
}
export const Linux: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Linux
  }
}
export const Mexc: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Mexc
  }
}
export const MyWitWallet: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.MyWitWallet
  }
}
export const NavitagionCursor: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.NavitagionCursor
  }
}
export const Raspberry: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Raspberry
  }
}
export const RightArrow: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.RightArrow
  }
}
export const Sheikah: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Sheikah
  }
}
export const Simpleswap: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Simpleswap
  }
}
export const Telegram: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Telegram
  }
}

export const Windows: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.Windows
  }
}

export const X: Story = {
  render: (args: unknown) => ({
    components: { WIcon },
    setup() {
      return { args }
    },
    template: `<WIcon v-bind="args" />`
  }),
  args: {
    name: IconName.X
  }
}

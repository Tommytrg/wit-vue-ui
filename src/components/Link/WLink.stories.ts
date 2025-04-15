import type { Meta, StoryObj } from '@storybook/vue3'
import WLink from './WLink.vue'

const meta = {
  title: 'Example/WLink',
  component: WLink,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof WLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { WLink },
    setup() {
      return { args }
    },
    template: `<WLink v-bind="args" class="text">Link</Link>`
  }),
  args: {
    label: 'Link',
    href: '#'
  }
}

export const Underline: Story = {
  render: (args) => ({
    components: { WLink },
    setup() {
      return { args }
    },
    template: `<WLink v-bind="args">Link</Link>`
  }),
  args: {
    label: 'Link',
    underline: true,
    href: '#',
    hover: false
  }
}

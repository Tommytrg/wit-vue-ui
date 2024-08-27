import type { Meta, StoryObj } from '@storybook/vue3'
// import { fn } from '@storybook/test';
import WNavbar from './WNavbar.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: any = {
  title: 'Example/WNavbar',
  component: WNavbar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // type: { control: 'select', options: ['primary', 'secondary', 'arrow', 'dark'] }
  },
  args: {
    // type: 'primary'
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  }
} satisfies Meta<typeof WNavbar>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Navbar: Story = {
  render: (args: any) => ({
    components: { WNavbar },
    setup() {
      return { args }
    },
    template: `<WNavbar v-bind="args">
        <template #logo>
          Logo
        </template>
      </WNavbar>`
  }),
  args: {
    navLinks: [
      {
        key: 'stake',
        active: false,
        to: '/stake',
        rel: 'stake',
        locale: 'stake',
      },
      {
        key: 'buy',
        active: false,
        to: '/buy',
        rel: 'buy',
        locale: 'buy',
      },
      {
        key: 'build',
        active: false,
        to: '/build',
        rel: 'build',
        locale: 'build',
      },
    ],
    redirectionActive: false
  }
}

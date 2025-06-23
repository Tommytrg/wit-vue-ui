import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WPagination from './WPagination.vue'

describe('WPagination', () => {
  it('renders properly without divider', () => {
    const wrapper = mount(WPagination, { props: { total: 100, pageSize: 5, page: 1 } })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders properly with divider', () => {
    const wrapper = mount(WPagination, { props: { total: 10, pageSize: 5, page: 4 } })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('click on page changes current page', async () => {
    const wrapper = mount(WPagination, { props: { total: 10, pageSize: 5, page: 1 } })

    const buttons = wrapper.findAll('button')

    expect(buttons[2].element.textContent).toBe('2')

    await buttons[2].trigger('click')

    const selected = wrapper.find('.bg-wit-blue-500')

    expect(selected.text()).toBe('2')
  })

  it('click on previous changes current page', async () => {
    const wrapper = mount(WPagination, { props: { total: 10, pageSize: 5, page: 2 } })

    const buttons = wrapper.findAll('button')

    expect(buttons[0].element.textContent).toBe('Prev')

    await buttons[0].trigger('click')

    const selected = wrapper.find('.bg-wit-blue-500')

    expect(selected.text()).toBe('1')
  })

  it('click on next changes current page', async () => {
    const wrapper = mount(WPagination, { props: { total: 10, pageSize: 5, page: 1 } })

    const buttons = wrapper.findAll('button')

    expect(buttons[3].element.textContent).toBe('Next')

    await buttons[3].trigger('click')

    const selected = wrapper.find('.bg-wit-blue-500')

    expect(selected.text()).toBe('2')
  })
})

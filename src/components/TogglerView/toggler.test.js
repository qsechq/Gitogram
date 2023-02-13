import { shallowMount } from '@vue/test-utils'
import { TogglerView } from '@/components/TogglerView'

describe('toggler', () => {
  it('change title on click', async () => {
    const wrapper = shallowMount(TogglerView)
    expect(wrapper.find('.post__btn-toggle').text()).toBe('View issues')
    await wrapper.find('.post__item-btn').trigger('click')
    expect(wrapper.find('.post__btn-toggle').text()).toBe('Hide issues')
  })
})

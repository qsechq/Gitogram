import { issuesComponent } from '@/components/issuesComponent'
import { mount } from '@vue/test-utils'

describe('issues component', () => {
  it('Выполняет событие emit loadIssues', async () => {
    const wrapper = mount(issuesComponent)

    await wrapper.find('.post__item-toggler button').trigger('click')

    expect(wrapper.emitted().loadIssues.length).toBe(1)
  })

  it('Отрисует список элементов', async () => {
    const issue = {
      body: 'body',
      user: {
        login: 'user'
      }
    }

    const wrapper = mount(issuesComponent, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    expect(wrapper.findAll('.comment__container').exists).toBe(undefined)

    await wrapper.find('.post__item-toggler button').trigger('click')

    expect(wrapper.findAll('.post__comments-item').length).toBe(6)
  })

  it('тест на отправку лишних запросов', async () => {
    const issue = {
      body: 'body',
      user: {
        login: 'user'
      }
    }

    const wrapper = mount(issuesComponent, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    await wrapper.find('.post__item-toggler button').trigger('click')

    expect(wrapper.emitted().loadIssues).toBeUndefined()
  })
})

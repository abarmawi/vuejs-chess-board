import { shallowMount, Wrapper } from '@vue/test-utils'
import Board from '../Board.vue'

describe('Board', () => {
  let wrapper: Wrapper<Board>

  beforeEach(() => {
    wrapper = shallowMount(Board, {
      propsData: {},
    })
  })

  it('should render 8 files', () => {
    expect(wrapper.findAll('file-stub').length).toBe(8)
  })
})

import { shallowMount, Wrapper } from '@vue/test-utils'
import File from '../File.vue'
import { chessBoard } from '../../ChessBoardSetup'

describe('File', () => {
  let wrapper: Wrapper<File>

  beforeEach(() => {
    wrapper = shallowMount(File, {
      propsData: {
        file: chessBoard[0],
      },
    })
  })

  it('should render 8 cells', () => {
    expect(wrapper.findAll('cell-stub').length).toBe(8)
  })
})

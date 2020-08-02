import { shallowMount, Wrapper } from '@vue/test-utils'
import Cell from '../Cell.vue'
import { ChessCell } from '../../ChessBoardSetup'

describe('Cell', () => {
  let wrapper: Wrapper<any>
  const cell: ChessCell = {
    id: 'pawn-white-A-0',
    color: 'white',
    defaultPice: 'pawn',
    piceColor: 'white',
  }

  beforeEach(() => {
    wrapper = shallowMount(Cell, { propsData: { cell, fileId: 'A' } })
  })

  describe('Functions', () => {
    describe('isBlack', () => {
      it('should return false if cell color is white', () => {
        expect(wrapper.vm.isBlack).toBeFalsy()
      })

      it('should return true if cell color is black', () => {
        wrapper = shallowMount(Cell, {
          propsData: { cell: { ...cell, color: 'black' }, fileId: 'A' },
        })

        expect(wrapper.vm.isBlack).toBeTruthy()
      })
    })

    describe('piceId', () => {
      it('should return piece id', () => {
        expect(wrapper.vm.piceId).toBe(
          `${cell.defaultPice}-${cell.piceColor}-${cell.id}-A`
        )
      })
    })

    describe('cellId', () => {
      it('should return cell id', () => {
        expect(wrapper.vm.cellId).toBe(`${cell.id}-A`)
      })
    })

    describe('hasPice', () => {
      it('should return true if cell has pice', () => {
        expect(wrapper.vm.hasPice).toBeTruthy()
      })

      it('should return false if cell has no pice', () => {
        wrapper = shallowMount(Cell, {
          propsData: { cell: { ...cell, defaultPice: 'non' }, fileId: 'A' },
        })

        expect(wrapper.vm.hasPice).toBeFalsy()
      })
    })

    describe('drag', () => {
      it('should call setData', () => {
        const ev = {
          dataTransfer: {
            setData: jest.fn(),
          },
        }
        wrapper.vm.drag(ev)
        expect(ev.dataTransfer.setData).toHaveBeenCalledWith(
          'piceId',
          `${cell.defaultPice}-${cell.piceColor}-${cell.id}-A`
        )
      })
    })

    describe('allowDrop', () => {
      it('should call preventDefault', () => {
        const ev = {
          preventDefault: jest.fn(),
        }
        wrapper.vm.allowDrop(ev)
        expect(ev.preventDefault).toHaveBeenCalled()
      })
    })

    describe('drop', () => {
      const appendChild = jest.fn()
      document.getElementById = jest.fn(() => {
        return {
          appendChild,
        }
      }) as any
      const ev = {
        preventDefault: jest.fn(),
        dataTransfer: {
          getData: () => `${cell.defaultPice}-${cell.piceColor}-${cell.id}-A`,
        },
      }

      it('should call preventDefault', () => {
        wrapper.vm.drop(ev)
        expect(ev.preventDefault).toHaveBeenCalled()
      })

      it('should append cell', () => {
        wrapper.vm.drop(ev)
        expect(document.getElementById).toHaveBeenCalled()
        expect(appendChild).toHaveBeenCalled()
      })
    })
  })
})

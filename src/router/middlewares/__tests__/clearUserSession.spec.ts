/* eslint @typescript-eslint/no-explicit-any: 0 */
import clearUserSession from '../clearUserSession'

describe('clearUserSession', () => {
  it('should dispatch OnboardingModule/clearUserSession', () => {
    const next = jest.fn()
    const store: any = {
      dispatch: jest.fn(),
    }

    clearUserSession({
      next,
      store,
    })

    expect(store.dispatch).toHaveBeenCalledWith(
      'OnboardingModule/clearUserSession'
    )
    expect(next).toHaveBeenCalledWith()
  })
})

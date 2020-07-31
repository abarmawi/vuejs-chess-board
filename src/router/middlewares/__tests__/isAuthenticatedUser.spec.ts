/* eslint @typescript-eslint/no-explicit-any: 0 */
import isAuthenticatedUser from '../isAuthenticatedUser'

describe('isAuthenticatedUser', () => {
  it('should go to login if user is not authenticated', () => {
    const next = jest.fn()
    const store: any = {
      state: {
        isLoggedIn: false,
      },
    }

    isAuthenticatedUser({
      next,
      store,
    })

    expect(next).toHaveBeenCalledWith({
      name: 'login',
    })
  })

  it('should continue to next route if user is logged in', () => {
    const next = jest.fn()
    const store: any = {
      state: {
        isLoggedIn: true,
      },
    }

    isAuthenticatedUser({
      next,
      store,
    })

    expect(next).toHaveBeenCalledWith()
  })
})

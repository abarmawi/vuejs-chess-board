import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { LoginResponse } from '@/biz/services/PlayService'

@Module({
  namespaced: true,
})
export class BaseVuexModule<S, R> extends VuexModule<S, R> {
  invalidLogin = false

  @Action({})
  toggleLoading() {
    this.context.dispatch('toggleLoading', null, { root: true })
  }
  @Action({})
  setUserSession(response: LoginResponse) {
    this.context.commit('SET_ACCESS_TOKEN', response.accessToken, {
      root: true,
    })
    localStorage.setItem('access-token', response.accessToken)
  }

  @Action({})
  clearUserSession() {
    this.context.commit('SET_ACCESS_TOKEN', '', {
      root: true,
    })
    localStorage.removeItem('access-token')
  }

  @Action({})
  showInvalidLogin(show: boolean) {
    this.context.commit('SHOW_INVALID_LOGIN', show)
  }

  @Mutation
  SHOW_INVALID_LOGIN(show: boolean) {
    this.invalidLogin = show
  }
}

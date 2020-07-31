import { Module, Action, Mutation, VuexModule } from 'vuex-module-decorators'
import { LoginResponse } from '@/biz/services/PlayService'

export interface AppState {
  isLoading: boolean
  accessToken: string
  selectedMenuIndex: string
}

@Module({
  namespaced: true,
})
export default class AppModule extends VuexModule<AppState, {}> {
  accessToken = localStorage.getItem('access-token') || ''
  isLoading = false
  selectedMenuIndex = localStorage.getItem('selected-menu-index') || '1'

  @Action({})
  toggleLoading() {
    this.context.commit('TOGGLE_LOADING')
  }
  @Action({})
  setSelectedMenuIndex(selectedMenuIndex: string) {
    localStorage.setItem('selected-menu-index', selectedMenuIndex)
    this.context.commit('SET_SELECTED_MENU_INDEX', selectedMenuIndex)
  }

  @Action({})
  setUserSession(response: LoginResponse) {
    this.context.commit('SET_ACCESS_TOKEN', response.accessToken)
    localStorage.setItem('access-token', response.accessToken)
  }

  @Action({})
  clearUserSession() {
    this.context.commit('SET_ACCESS_TOKEN', '')
    localStorage.removeItem('access-token')
  }

  @Mutation
  SET_ACCESS_TOKEN(accessToken: string) {
    this.accessToken = accessToken
  }

  @Mutation
  TOGGLE_LOADING() {
    this.isLoading = !this.isLoading
  }

  @Mutation
  SET_SELECTED_MENU_INDEX(selectedMenuIndex: string) {
    this.selectedMenuIndex = selectedMenuIndex
  }

  // getIsLoggedIn() {
  //   return this.accessToken
  // }

  get getSelectedMenuIndex() {
    return this.selectedMenuIndex
  }

  // getLoading() {
  //   return this.isLoading
  // }
}

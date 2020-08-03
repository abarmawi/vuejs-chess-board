import { Module, VuexModule } from 'vuex-module-decorators'

export interface AppState {
  isLoading: boolean
}

@Module({
  namespaced: true,
})
export default class AppModule extends VuexModule<AppState, {}> {}

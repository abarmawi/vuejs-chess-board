import { Module, VuexModule } from 'vuex-module-decorators'

@Module({
  namespaced: true,
})
export class BaseVuexModule<S, R> extends VuexModule<S, R> {}

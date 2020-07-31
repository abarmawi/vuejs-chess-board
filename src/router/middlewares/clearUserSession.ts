import Vue from 'vue'
import { Store } from 'vuex'
import { NavigationGuardNext } from 'vue-router'
import { AppState } from '@/store/appStore'

export default function clearUserSession({
  next,
  store,
}: {
  next: NavigationGuardNext<Vue>
  store: Store<AppState>
}) {
  store.dispatch('AppModule/clearUserSession')
  return next()
}

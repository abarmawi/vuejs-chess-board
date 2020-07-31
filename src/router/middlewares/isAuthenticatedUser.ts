import Vue from 'vue'
import { Store } from 'vuex'
import { NavigationGuardNext } from 'vue-router'
// import { AppState } from '@/store/appStore'

export default function isAuthenticatedUser({
  next,
  store,
}: {
  next: NavigationGuardNext<Vue>
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  store: Store<any>
}) {
  if (store.state.AppModule.accessToken == '') {
    return next({
      name: 'login',
    })
  }

  return next()
}

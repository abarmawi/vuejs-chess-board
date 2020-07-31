import { RouteConfig } from 'vue-router'
import BoardPage from './views/board/BoardPage.vue'

export const routes: Array<RouteConfig> = [
  {
    path: '/board',
    name: 'board',
    component: BoardPage,
  },
]

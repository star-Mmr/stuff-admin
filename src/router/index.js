import {lazy} from 'react';

const routes = [
  {
    path: '/login',
    component: lazy(() => import('@/pages/login'))
  },
  {
    path: '/main',
    component: lazy(() => import('@/pages/main'))
  }
]

export default routes
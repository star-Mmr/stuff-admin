import {lazy} from 'react';

const mainRouter = [
  {
    path: '/main',
    exact: true,
    component: lazy(() => import('@/pages/main'))
  }
]

export default mainRouter
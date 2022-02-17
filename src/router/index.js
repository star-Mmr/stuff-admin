import {Redirect} from 'react-router-dom'

import loginRouter from './login/login';
import mainRouter from './main/main';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to='/login'/>
    }
  },
  ...loginRouter,
  ...mainRouter
]

export default routes
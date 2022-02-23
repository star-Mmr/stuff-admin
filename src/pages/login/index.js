import React, { memo } from 'react'
import LoginPanel from './cpns/login-panel';

import LoginWapper from './style';

const Login = memo(() => {
  return (
    <LoginWapper>
      <LoginPanel></LoginPanel>
    </LoginWapper>
  )
})

export default Login
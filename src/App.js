import React, { memo } from 'react'

import {BrowserRouter, NavLink} from 'react-router-dom';

import {renderRoutes} from 'react-router-config';

import routes from '@/router';


const App = memo(() => {
  return (
    <BrowserRouter>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/mian'>Main</NavLink>
      <div>
      {renderRoutes(routes)}
      </div>
    </BrowserRouter>
    
  )
})

export default App
import React, { memo,Suspense } from 'react'

import { withRouter } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';

import routes from '@/router';
import styled from 'styled-components'

const AppWapper = styled.div`
  height: 100%;
`


const App = memo(() => {
  return (
    <AppWapper>
      <Suspense fallback={<div>XXXX</div>}>
        {renderRoutes(routes)}
      </Suspense>
    </AppWapper>
      
  )
})

export default withRouter(App)
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import '@/assets/css/reset.css';

import App from './App';

// import {BASE_URL,TIMEOUT} from './services/request/config'
// import axios from 'axios' 

// const instance = axios.create({
//   baseURL: BASE_URL,
//   timeout: TIMEOUT
// })

// instance.request({
//   url: '/get',
//   method: 'GET'
// }).then(res => {
//   console.log(res)
// })


ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById('root')
);


import React, { memo } from 'react'
import styled from 'styled-components';

import {Tabs} from 'antd';
import { MobileOutlined, UserOutlined } from '@ant-design/icons';

import LoginAccount from './login-account';
import LoginPhone from './login-phone';

const { TabPane } = Tabs;

const LoginPanelWapper = styled.div`
  width: 320px;
  text-align: center;
`

const LoginPanel = memo(() => {
  return (
    <LoginPanelWapper>
      <h1>后台管理系统</h1>
      <Tabs defaultActiveKey="1" centered>
        <TabPane
          tab={
            <span>
              <UserOutlined />
              账户登录
            </span>
          }
          key="1"
        >
          <LoginAccount />
        </TabPane>
        <TabPane
          tab={
            <span>
              <MobileOutlined />
              手机登录
            </span>
          }
          key="2"
        >
          <LoginPhone />
        </TabPane>
      </Tabs>
    </LoginPanelWapper>
  )
})

export default LoginPanel
import React, { memo } from 'react';
import styled from 'styled-components';

import { Form, Input,  Checkbox ,Button} from 'antd';
import { PhoneOutlined, LockOutlined } from '@ant-design/icons';


const LoginPhoneWapper = styled.div`
  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }
`

const LoginPhone = memo(() => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <LoginPhoneWapper>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone!',
            },
          ]}
        >
          <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone" />
        </Form.Item>
        <Form.Item
        name="verify-code"
        rules={[
          {
            required: true,
            message: 'Please input your Verify-code!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Verify-code"
        />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
      </Form>
    </LoginPhoneWapper>
  )
})

export default LoginPhone
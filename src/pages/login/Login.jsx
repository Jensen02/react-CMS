import * as React from 'react';
import { Form, Icon, Input, Button, Divider, message } from 'antd';
// import { login } from '../../api/api';
// import { request } from '../../http/http';
import './Login.css';

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // login(values).then(res => {
        //   res.status === 0 && message.success('登录成功!') && this.props.history.replace('/')
        //   res.status === 1 && message.error(res.msg)
        //   console.log(res)
        // })
        // request({
        //   type: 'post',
        //   url: '/manage/user/login.do',
        //   data: {
        //     username: values.username,
        //     password: values.password
        //   }
        // }).then(res => {
        //   console.log(res)
        //   res.status === 0 && message.success('登录成功!') && this.props.history.replace('/')
        // }).catch(error => {
        //   console.log(error)
        // })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <Divider style={{color: 'blue'}}>
          <h1>欢迎登录</h1>
        </Divider>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住密码</Checkbox>)} */}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// const Login = Form.create({ name: 'normal_login' })(Login);

export default Form.create({ name: 'normal_login' })(Login);
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';

import { Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Box, Container } from '@mui/system';

const App = () => {
	const onFinish = values => {
		console.log('Received values of form: ', values);
	};

	return (
		<Container>
			<div className="site-card-border-less-wrapper, margin">
				<Card
					title="Login"
					bordered={false}
					style={{
						width: 300,
					}}
				>
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
					>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Please input your Username!',
								},
							]}
						>
							<Input
								prefix={<UserOutlined className="site-form-item-icon" />}
								placeholder="Username"
							/>
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your Password!',
								},
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
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
							<Button
								type="primary"
								htmlType="submit"
								className="login-form-button"
							>
								Log in
							</Button>
							Or <a href="">register now!</a>
						</Form.Item>
					</Form>
				</Card>
			</div>
		</Container>
	);
};

export default App;

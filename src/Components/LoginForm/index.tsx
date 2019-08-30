import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import UserContext, { UserProps } from '../../contexts/UserContext';
import history from '../../routes/history';
import './index.less';
import { WrappedFormUtils } from 'antd/lib/form/Form';

function hasErrors(fieldsError) {
	return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

class WrappedVerticalLoginForm extends React.Component<any, any> {
	public render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const usernameError = isFieldTouched('username') && getFieldError('username');
		const passwordError = isFieldTouched('password') && getFieldError('password');

		const { username, login, handleLogin } = this.props.context;

		console.log('form:', this.props.context);

		const handleSubmit = (e) => {
			e.preventDefault();
			this.props.form.validateFields((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
					handleLogin(values.username, values.password).then((res) => {
						console.log(res);
						if (res !== -1) {
							history.push(`/content/${res}`);
						}
					});
				}
			});
		};

		return (
			<Form layout="horizontal" className="form" onSubmit={handleSubmit}>
				{login ? (
					<div className="button_right">
						<span>{`hasLogged:${username}`}</span>
						<a href="/content">Enter</a>
					</div>
				) : (
					<div className="input_center" style={{ textAlign: 'center' }}>
						<Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: 'Please input your username!' }, { type: 'email', message: 'Require an email string!' }]
							})(<Input className="input" prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />} placeholder="Username" />)}
						</Form.Item>
						<Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }, { min: 8, message: 'The min length is 8.' }]
							})(<Input className="input" prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} />} type="password" placeholder="Password" />)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
								Log in
							</Button>
						</Form.Item>
					</div>
				)}
			</Form>
		);
	}
}
interface Iprops {
	context: UserProps;
	form: WrappedFormUtils<any>;
}
export const LoginForm = Form.create<Iprops>({ name: 'login' })(WrappedVerticalLoginForm);

const Login = (props) => {
	console.log(props);
	const context = React.useContext(UserContext);
	console.log('Login', context);
	return <LoginForm context={context} />;
};
export default Login;

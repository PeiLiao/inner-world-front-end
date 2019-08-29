import LoginForm from '../../Components/LoginForm';
import UserContext from '../../contexts/UserContext';
import React from 'react';

const LoginPage = () => {
	const context = React.useContext(UserContext);
	console.log('Login', context);


	
	return <LoginForm context={context} />;
};
export default LoginPage;

import React, { useState } from 'react';

import { loginUser, useAuthState, useAuthDispatch } from '../../Context';
import styles from './login.module.css';
import {Redirect, useHistory} from "react-router-dom";

function Login(props) {
	const [redmine_login, setRedmine_login] = useState('');
	const [redmine_token, setRedmine_token] = useState('');

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();
	console.log(useAuthState())
	const history = useHistory();
	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			let response = await loginUser(dispatch, { redmine_login, redmine_token });
			console.log(response, 'response')
			if (!response.token) return;
			// props.history.push('/dashboard');
			history.push('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={{ width: 200 }}>
				<h1>Login Page</h1>
				{errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
				<form>
					<div className={styles.loginForm}>
						<div className={styles.loginFormItem}>
							<label htmlFor='text'>Username</label>
							<input
								type='text'
								id='redmine_login'
								value={redmine_login}
								onChange={(e) => setRedmine_login(e.target.value)}
								// disabled={loading}
							/>
						</div>
						<div className={styles.loginFormItem}>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='redmine_token'
								value={redmine_token}
								onChange={(e) => setRedmine_token(e.target.value)}
								// disabled={loading}
							/>
						</div>
					</div>
					<button onClick={handleLogin} disabled={loading}>
						login
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;

import React, { useState } from 'react';

import { loginUser, useAuthState, useAuthDispatch } from '../../Context';
import styles from './login.module.css';
import {Redirect, useHistory} from "react-router-dom";

function Login(props) {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();
	const history = useHistory();
	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			let response = await loginUser(dispatch, { user, password });
			if (!response.user) return;
			console.log(response)
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
								id='user'
								value={user}
								onChange={(e) => setUser(e.target.value)}
								disabled={loading}
							/>
						</div>
						<div className={styles.loginFormItem}>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								disabled={loading}
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

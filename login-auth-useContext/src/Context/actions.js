const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';

export async function loginUser(dispatch, loginPayload) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: 'REQUEST_LOGIN', payload: loginPayload.redmine_login });

		console.log(requestOptions, 'requestOptions')
		let response = await fetch(`http://127.0.0.1:80/api/v0/auth/login/`, requestOptions);
		let data = await response.json();
		console.log('Response Data', {...data, userName: loginPayload.redmine_login});

		if (data.token) {
			dispatch({ type: 'LOGIN_SUCCESS', payload: data });
			localStorage.setItem('currentUser', JSON.stringify({...data, userName: loginPayload.redmine_login}));
			// localStorage.setItem('currentUser', JSON.stringify(loginPayload.redmine_login));
			return data;
		}

		dispatch({ type: 'LOGIN_ERROR', error: data});
		console.log(data);
		return;

	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}

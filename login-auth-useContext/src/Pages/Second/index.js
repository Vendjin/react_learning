import React from 'react';
import { useAuthDispatch, logout, useAuthState } from '../../Context';
import styles from './second.module.css';
import {useHistory} from "react-router-dom";

function Second(props) {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();
    const history = useHistory();
    const handleLogout = () => {
        logout(dispatch);
        history.push('/login');
    };
    return (
        <div style={{ padding: 10 }}>
            <div className={styles.dashboardPage}>
                <h1>SECOND</h1>
                <button className={styles.logoutBtn} onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <p>Welcome {userDetails.user}</p>
        </div>
    );
}

export default Second;

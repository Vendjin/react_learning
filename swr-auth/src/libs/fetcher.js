import {axiosInstance} from "../utils/axios";
export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const login = async (data) => {
    try {
        const user = await axiosInstance.post('api/v0/auth/login/', data);
        console.log(user.data)
        sessionStorage.setItem('userId', user.data.user_id);
        sessionStorage.setItem('userName', user.data.user_name);
        sessionStorage.setItem('token', user.data.token);

    } catch (e) {
        console.log(e)
    }
};



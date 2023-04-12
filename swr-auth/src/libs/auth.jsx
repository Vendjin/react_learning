import {axiosInstance} from "../utils/axios";

export const login = async (data) => {
    try {
        const user = await axiosInstance.post('api/v0/auth/login/', data);
        console.log(user, 'DATA in response')
        sessionStorage.setItem('token', user.data.token);
    } catch (e) {
        if (e.response.status === 401) {
            console.log(e.response.status)
            throw new Error('Неверный логин или пароль')

        }
    }
};
export const logOut = () => {
    try {
        sessionStorage.removeItem('token');
    } catch (e) {
        console.log(e)
    }
}
export interface IPropsLogin {
    // функции из useState ничего не возвращают, а меняют состояние, поэтому Void
    setUsername: (value: string) => void,
    setPassword: (value: string) => void
}

export interface IPropsRegister {
    setUsername: (value: string) => void,
    setPassword: (value: string) => void,
    setRepeatPassword: (value: string) => void,
    setName: (value: string) => void,
    setEmail: (value: string) => void
}

export interface IAuthState {
    user: {} | IPublicUser,
    isLogged: boolean
}

export interface IPublicUser {
    id: number,
    username: string,
    token: string,
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    image: string,
}
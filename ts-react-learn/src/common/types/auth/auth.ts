import {FieldValues, UseFormRegister, FieldErrors} from "react-hook-form";

export interface IPropsLoginOld {
    // функции из useState ничего не возвращают, а меняют состояние, поэтому Void
    setUsername: (value: string) => void,
    setPassword: (value: string) => void;
}

export interface IPropsLogin<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;

}

export interface IPropsRegisterOld {
    setUsername: (value: string) => void,
    setPassword: (value: string) => void,
    setRepeatPassword: (value: string) => void,
    setName: (value: string) => void,
    setEmail: (value: string) => void
}


export interface IPropsRegister<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any,
> {
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean,
    isLoading: boolean
}

export interface IPublicUser {
    id: number | null,
    username: string,
    token: string,
    firstName: string,
    lastName: string,
    email: string,
    gender: string,
    image: string,
}

export interface ILoginData {
    username: string;
    password: string;
}

export interface IRegisterData {
    name: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}
import * as yup from 'yup';
import {AppErrors} from "../../common/errors";

export type Inputs = {
    username: string;
    password: string;
}
export const LoginSchema = yup.object().shape({
    username: yup.string()
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(7, AppErrors.MinPasswordLength)
        .required(AppErrors.RequiredField),
    // matches в функцию вставляем регулярку проверкпи пароля
    // .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidTypePassword),
});

export const RegisterSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    username: yup.string()
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(7, AppErrors.MinPasswordLength)
        .required(AppErrors.RequiredField),
    // matches в функцию вставляем регулярку проверкпи пароля
    // .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.InvalidTypePassword),
    confirmPassword: yup.string()
        .min(7, AppErrors.MinPasswordLength)
        .required(AppErrors.RequiredField),
    // .matches(/тут регулярка пароля/, AppErrors.InvalidTypePassword),
    name: yup.string().required(AppErrors.RequiredField)
});
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import {login} from "../libs/auth";

const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            redmine_login: '',
            redmine_token: '',
            submit: null
        },
        validationSchema: Yup.object({
            redmine_login: Yup.string()
            .required('Обязательное поле'),

            redmine_token: Yup.string()
            .required('Обязательное поле')
        }),
        onSubmit:
            async (values) => {
                await handleLogin(values.redmine_login, values.redmine_token);
            }

    })

    const handleLogin = async (redmine_login, redmine_token) => {
        await (login({redmine_login, redmine_token}))
        navigate('/', {replace: true});
    }

    return (
        <>
            <form className={'form'} onSubmit={formik.handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="name">Ваше имя</label>
                <input id={'redmine_login'}
                       name={'redmine_login'}
                       type={'text'}
                       value={formik.values.redmine_login}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                />
                {formik.errors.redmine_login && formik.touched.redmine_login ?
                    <div className={'error'}>{formik.errors.redmine_login}</div> : null}

                <label htmlFor="name">Ваше имя</label>
                <input id={'redmine_token'}
                       name={'redmine_token'}
                       type={'password'}
                       value={formik.values.redmine_token}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                />
                {formik.errors.redmine_token && formik.touched.redmine_token ?
                    <div className={'error'}>{formik.errors.redmine_token}</div> : null}

                <button type={"submit"}>Отправить</button>

            </form>

            <ul>

            </ul>
        </>

    )
}

export default Login;
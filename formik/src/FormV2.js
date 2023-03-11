import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import * as Yup from "yup";

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className={'error'}>{meta.error}</div>
            ) : null}
        </>
    )
};

const MyCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});

    return (
        <>
            <label className='checkbox'>
                <input type={"checkbox"} {...props} {...field}/>
                {children}
            </label>

            {meta.touched && meta.error ? (
                <div className={'error'}>{meta.error}</div>
            ) : null}
        </>
    )
}
export default function FormV2() {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}

            validationSchema={Yup.object({
                name: Yup.string()
                .min(2, 'Минимальная длина имени 2 символа')
                .required('Обязательное поле'),
                email: Yup.string()
                .email('Неверный формат email')
                .required('Обязательное поле'),
                amount: Yup.number()
                .min(5, 'Не менее 5 символов')
                .required('Обязательное поле'),
                currency: Yup.string().required('Выберите валюту'),
                text: Yup.string()
                .min(5, 'не менее 10 символов'),
                terms: Yup.boolean()
                .required('Обязательное поле')
                .oneOf([true], 'Необходимо согласие')

            })}

            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >

            <Form className={'form'}>
                <h2>Отправить пожертвование</h2>
                {/*<label htmlFor="name">Ваше имя</label>
                <Field id={'name'}
                       name={'name'}
                       type={'text'}
                />
                <ErrorMessage name={"name"} className={'error'} component={"div"}/>*/}
                <MyTextInput
                    label={'Ваше имя'}
                    id={'name'}
                    name={'name'}
                    type={'text'}
                />
                {/*<label htmlFor="email">Ваша почта</label>
                <Field type="text"
                       id={'email'}
                       name={'email'}
                />
                <ErrorMessage name={"email"} className={'error'} component={"div"}/>*/}
                <MyTextInput
                    label={'Ваша почта'}
                    type="text"
                    id={'email'}
                    name={'email'}
                />
                <label htmlFor="amount">Количество</label>
                <Field type="number"
                       id={'amount'}
                       name={'amount'}
                />
                <ErrorMessage name={"amount"} className={'error'} component={"div"}/>

                <label htmlFor="currency">Валюта</label>
                <Field name="currency" id="currency" as='select'>
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage name={"currency"} className={'error'} component={"div"}/>

                <label htmlFor="text">Ваше сообщение</label>
                <Field name="text" id="text" as='textarea'/>
                <ErrorMessage name={"text"} className={'error'} component={"div"}/>

                {/*<label className="checkbox">
                    <Field name="terms"
                           type="checkbox"
                    />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage name={"terms"} className={'error'} component={"div"}/>*/}
                <MyCheckBox
                    name={'terms'}
                >
                    Соглашаетесь с политикой конфиденциальности?
                </MyCheckBox>
                <button type={"submit"}>Отправить</button>
            </Form>
        </Formik>
    )
}
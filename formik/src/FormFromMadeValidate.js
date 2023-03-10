import {Formik, useFormik} from "formik";
import * as Yup from 'yup';
const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Обязательное поле!'
    } else if (values.name.length < 2) {
        errors.name = 'Минимум 2 символа'
    }

    if (!values.email) {
        errors.email = 'Обязательное поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Неверный форма email адреса'
    }

    return errors;
}


export default function FormFromMadeValidate() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        validate,
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    });

    return (
        <form className={'form'} onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input id={'name'}
                   name={'name'}
                   type={'text'}
                   value={formik.values.name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div>: null}

            <label htmlFor="email">Ваша почта</label>
            <input type="text"
                   id={'email'}
                   name={'email'}
                   value={formik.values.email}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div>: null}

            <label htmlFor="amount">Количество</label>
            <input type="number"
                   id={'amount'}
                   name={'amount'}
                   value={formik.values.amount}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
            />

            <label htmlFor="currency">Валюта</label>
            <select name="currency" id="currency" value={formik.values.currency} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">Выберите валюту</option>
                <option value="USD">USD</option>
                <option value="UAH">UAH</option>
                <option value="RUB">RUB</option>
            </select>

            <label htmlFor="text">Ваше сообщение</label>
            <textarea name="text" id="text" cols="30" rows="10" value={formik.values.text} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>

            <label className="checkbox">
                <input name="terms" type="checkbox" value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                Соглашаетесь с политикой конфиденциальности?
            </label>

            <button type={"submit"}>Отправить</button>
        </form>
    )
}

import './findForm.scss';
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import * as Yup from "yup";

export default function FindForm() {
    return (
        <Formik
            initialValues={{
                characterName: ''
            }}

            validationSchema={Yup.object({
                characterName: Yup.string()
                .required('This field is required')
            })}

            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className={'form'}>
                <label htmlFor={'characterName'}>Or find a character by name:</label>
                <Field type={'text'}
                       name={'characterName'}
                       id={'characterName'}
                       placeholder={'Enter name'}
                />
                <ErrorMessage name={'characterName'} className={'error'} component={'div'}/>

                <button type={'submit'}>FIND</button>
            </Form>

        </Formik>
    )
}
import './findForm.scss';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from "yup";
import useMarvelService from "../../services/MarvelService";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function FindFormOld() {
    const {loading, error, getCharacterByName, clearError} = useMarvelService();
    const [char, setChar] = useState(null);

    const onCharLoaded = (char) => {
        setChar(char)
    }

    const updateChar = (name) => {
        clearError();
        getCharacterByName(name)
        .then(onCharLoaded);
    }

    const errorMessage = error ? <div className={'formSearch__find-critical-error'}><ErrorMessage/></div> : null
    const results = !char ? null : char.length > 0 ?
        <div className={'formSearch__find'}>
            <div className={'formSearch__find-success'}>
                There is! Visit {char[0].name} page?
            </div>
            <Link to={`/characters/${char[0].id}`} className="button button__secondary">To page</Link>
        </div> :
        <div className="formSearch__search-error">
            The character was not found. Check the name and try again
        </div>;

    return (
        <div className={'formSearch'}>
            <Formik
                initialValues={{
                    characterName: ''
                }}

                validationSchema={Yup.object({
                    characterName: Yup.string()
                    .required('This field is required')
                })}

                onSubmit={({characterName}) => {
                    updateChar(characterName)
                }}
            >
                <Form>
                    <label htmlFor={'characterName'}>Or find a character by name:</label>
                    <div>
                        <Field className={'formSearch__input'}
                               type={'text'}
                               name={'characterName'}
                               id={'characterName'}
                               placeholder={'Enter name'}
                        />
                        <button className={'button button__main'} type={'submit'} disabled={loading}>FIND</button>
                    </div>
                    <ErrorMessage name={'characterName'} className={'formSearch-error'} component={'div'}/>
                </Form>

            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}
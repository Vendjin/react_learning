import {useState} from "react";
import './Form.css';
import {Context} from "./Context";

function Form(props) {
    const {children, submit = () => {}, initialValues} = props;

    const [form, setForm] = useState(initialValues);

    function handleFormChange(event) {
        const {name, value} = event.target;

        const updatedForm = {...form, [name]: value};
        console.log('Form changed: ', updatedForm);
        setForm(updatedForm)
    }

    return (
        <form className={"Form"}>
            <Context.Provider value={{form, handleFormChange}}>
                {children}
            </Context.Provider>

            <button type={'button'} onClick={() => submit(form)}>Submit</button>
        </form>
    )
};

export default Form;
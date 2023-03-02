import './App.css';
import FormInput from "./FormInput";
import {useState} from "react";
import Form from "./Form";

function App() {
    // Мы хотим иметь возможность получать значения формы в APP.
    /*const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
    });

    function handleFormChange(event) {
        const {name, value} = event.target;

        const updatedForm = {...form, [name]: value};
        console.log('Form changed: ', updatedForm);
        setForm(updatedForm)
    }*/
    const [message, setMessage] = useState('');

    const initialValues = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
    };

    const submit = (form) => {
        setMessage(`Thanks for signing up, ${form.firstName} ${form.lastName}! We've sent you an email to ${form.emailAddress}.`);
    };


    return (
        <div className="Wrapper"
             style={{width: '650px', margin: '0 auto', border: "solid 1px", boxSizing: "border-box"}}>
            <h1>Sign Up</h1>
            {/*<Context.Consumer>
                {({form, handleFormChange}) => (
                    <>
                        <FormInput label={'First Name'} name={'firstName'} value={form.firstName}
                                   onChange={handleFormChange}/>
                        <FormInput label={'Last Name'} name={'lastName'} value={form.lastName}
                                   onChange={handleFormChange}/>
                        <FormInput label={'Email Address'} type={'email'} name={'emailAddress'}
                                   value={form.emailAddress} onChange={handleFormChange}/>
                        <FormInput label={'Password'} type={'password'} name={'password'} value={form.password}
                                   onChange={handleFormChange}/>
                    </>
                )}
            </Context.Consumer>*/}
            <Form submit={submit} initialValues={initialValues}>
                <FormInput label={'First Name'} name={'firstName'}/>
                <FormInput label={'Last Name'} name={'lastName'}/>
                <FormInput label={'Email Address'} type={'email'} name={'emailAddress'}/>
                <FormInput label={'Password'} type={'password'} name={'password'}/>
            </Form>

            <p>{message}</p>

            <h2>Log In</h2>
            <Form
                submit={(form) => {
                    alert(`Logged in as ${form.username}!`);
                }}
                initialValues={{
                    username: '',
                    password: ''
                }}>
                <FormInput
                    label="Username"
                    name="username" />
                <FormInput
                    label="Password"
                    name="password" />
            </Form>

        </div>
    );
}

export default App;

import './Form.css';
import {useState, useContext} from "react";
import {Context} from "./Context";


const FormInput = (props) => {
    const {
        label,
        type='text',
        name,
        /*value,
        onChange*/
    } = props;

    const {form, handleFormChange} = useContext(Context);


    /*const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    };*/

    return (
        <div className={"FormInput"}>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                // value={value}
                value={form[name]}
                onChange={handleFormChange}
            />
        </div>
    )
};

export default FormInput;
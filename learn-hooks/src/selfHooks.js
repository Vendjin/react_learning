import {useState} from "react";
import {Container} from "react-bootstrap";

function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value)
    }

    const validateInput = () => {
        return value.search(/\d/) >= 0;
    }

    // return {value: value, onChange: onChange}
    return {value, onChange, validateInput}
}
const SelfHooks = (props) => {

    // const [text, setText] = useState('');
    // const [textArea, setTextArea] = useState('');

    const input = useInputWithValidate('');
    const textArea = useInputWithValidate('');

    // const color = validateInput(text) ? 'text-danger': null;
    const color = input.validateInput() ? 'text-danger': null;

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input type="text" value={`${input.value} / ${textArea.value}`} className='form-control' readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input
                        // onChange={event => setText(event.target.value)}
                        onChange={input.onChange}
                        type="email"
                        // добавил value что бы форма стала контролируемой, что делаем элемент синхронизированным
                        // с состоянием
                        // value={text}
                        value={input.value}
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        // onChange={event => setTextArea(event.target.value)}
                        onChange={textArea.onChange}
                        value={textArea.value}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3">
                    </textarea>
                </div>
            </form>
        </Container>
    )
}

export default SelfHooks;
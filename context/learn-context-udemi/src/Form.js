import {memo, useContext} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import InputContainer from "./Input";
import DataContext from "./context";
import TextArea from "./TextArea";

// для обхода проблемы сравнения объектов
const propsCompare = (prevProps, nextProps) => {
    return prevProps.mail === nextProps.mail && prevProps.text === nextProps.text;
}

const FormMemo = memo((props) => {
    // React.memo когда пропсы будут без изменений, то компонент не будет снова ренедерица
    console.log('render');

    const context = useContext(DataContext);
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputContainer/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{context.text}</label>
                    <TextArea/>
                </div>
            </form>
        </Container>
    )
    // вторым элементом передаем свою функцию сравнения
}, propsCompare);



export default FormMemo;
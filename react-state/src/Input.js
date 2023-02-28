import {useContext} from "react";
import dataContext from "./context";

const InputContainer = () => {
    // получение данных из контекста
    const context = useContext(dataContext);

    return (
        /*<Consumer>
            {
                value => {
                    return (
                        <input type="email"
                               value={value.mail}
                               className='form-control'
                               placeholder="name@example.com"
                        />
                    )
                }
            }
        </Consumer>*/
        <input type="email"
               value={context.mail}
               className='form-control'
               placeholder="name@example.com"
               onFocus={context.forceChangeMail}
        />

    )
}

export default InputContainer;


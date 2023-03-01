import {useContext} from "react";
import dataContext from "./context";

const TextArea = () => {
    const context = useContext(dataContext);
    return (
        <textarea
            // value={context.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={context.changeText}
        ></textarea>

    )
}

export default TextArea;
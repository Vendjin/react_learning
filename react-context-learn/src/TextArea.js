import {useContext} from "react";
import DataContext from "./context";

const TextArea = () => {
    const context = useContext(DataContext);
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
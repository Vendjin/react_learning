import {useDispatch, useSelector} from "react-redux";
import {dec, inc, rnd} from '../actions';

const Counter = () => {
    // useSelector хук, вытаскивает данные из стейта
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className='jumbotron'>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

export default Counter;
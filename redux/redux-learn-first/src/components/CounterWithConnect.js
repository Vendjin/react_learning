import {connect} from "react-redux";
import * as actions from '../actions';
import {bindActionCreators} from "redux";

const Counter = ({counter, inc, dec, rnd, smth}) => {

    return (
        <div className='jumbotron'>
            <h1>{counter} {smth}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // state.value -это что что в const initialState = {value: 0}; в файле reducer
        counter: state.value,
        smth: state.foo,
    }
}

// данная функция это то что под капотом у connect в actions
const mapDispatchToProps = (dispatch) => {
    // первичный вариант
   /* const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
    return {
        inc,
        dec,
        /!*rnd: () => {
            const value = Math.floor(Math.random() * 10);
            rnd(value)
        }*!/
        rnd
    }*/
    // упрощенная версия
    return bindActionCreators(actions, dispatch);
}

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, actions)(Counter);
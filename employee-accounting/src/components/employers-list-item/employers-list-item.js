import './employers-list-items.css';
import {Component} from "react";

// классовый компонент
class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    render() {
        // имя и зп получаем из пропсов
        const {name, salary} = this.props;
        // а премию из стейта, который по умолчанию false
        const {increase, like} = this.state;

        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNames += ' increase';
        } if (like) {
            classNames += ' like'
        }



        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">

                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}


/*const EmployersListItem = ({name, salary, increase}) => {

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }

    return (
         <li className={classNames}>
             <span className="list-group-item-label">{name}</span>
             <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
             <div className="d-flex justify-content-center align-items-center">
                 <button type="button"
                         className="btn-cookie btn-sm ">
                     <i className="fas fa-cookie"></i>
                 </button>

                 <button type="button"
                         className="btn-trash btn-sm ">
                     <i className="fas fa-trash"></i>
                 </button>
                 <i className="fas fa-star"></i>
             </div>
         </li>
    )
}*/

export default EmployersListItem;
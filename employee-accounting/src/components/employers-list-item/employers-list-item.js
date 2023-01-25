import './employers-list-items.css';
import {Component} from "react";

const EmployersListItem = (props) => {
    const {name, salary, increase, rise, onDelete, onToggleProp} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like'
    }

    return (
        <li className={classNames}>
            <span
                className="list-group-item-label"
                onClick={onToggleProp}
                data-toggle="rise">{name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

// классовый компонент
/*тк хранить данные локально в этом компоненте мы больше не будем, а их выносим
на уровень выше в app, что бы их оттуда пробросить в app-info, то возвращаемся обратно
к функциональному стилю, тк стейт нам больше не нужен*/
/*class EmployersListItem extends Component {
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
        const {name, salary, onDelete} = this.props;
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
                            className="btn-trash btn-sm "
                            /!*props_drill часть4 навешиваем на кнопку состояние
                            с проброшенной функцией в пропсах из
                            EmployersListItem <- app.js onDeleteDrill(id)*!/
                            onClick={onDelete}>

                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}*/


export default EmployersListItem;
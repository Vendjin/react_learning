import './employers-add-form.css';
import {Component} from "react";

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    };

    // обработчик на несколько инпутов
    onValueChange = (event) => {
        /*// если нам важно что было до, те какие значения стояли, то делаем так
        this.setState(({something}) => ({}))*/
        this.setState({
            // что бы использовать [] в верстке добавляем name с таким же именем как и state
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const {onAdd} = this.props;
        const {name, salary} = this.state;

        // если имя меньше 3х символов или не передали зарплату то return
        if (name < 3 || !salary) return;
        onAdd(name, salary);

        // после добавления очищаем форму
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        // const {adItem} = this.props;
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control"
                           placeholder="Как его зовут?"
                           name="name"
                           /*с помощью атрибута value мы сделали управляемую форму
                           в которой всегда отображается значение this.state.name*/
                           value={name}
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control"
                           placeholder="З/П в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        )
    }
}

/*const EmployersAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex">
                <input type="text"
                       className="form-control"
                       placeholder="Как его зовут?"/>
                <input type="number"
                       className="form-control"
                       placeholder="З/П в $?"/>

                <button type="submit"
                        className="btn btn-outline-light">
                    Добавить
                </button>
            </form>
        </div>
    )
}*/

export default EmployersAddForm;
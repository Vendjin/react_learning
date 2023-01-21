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
        /*// если нам важно что было до, то делаем так
        this.setState(({something}) => ({}))*/
        this.setState({
            // что бы использовать [] в верстке добавляем name с таким же именем как и state
            [event.target.name]: event.target.value
        })
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text"
                           className="form-control"
                           placeholder="Как его зовут?"
                           name="name"
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
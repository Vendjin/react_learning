import './search-panel.css';
import {Component} from "react";


class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (event) => {
        // получаем данные из компонента
        const term = event.target.value;
        // сохраняем их в локальный стейт
        this.setState({term: term})
        // передаем их в функцию из app, а она уже изменить глобальный стейт
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

/*const SearchPanel = (props) => {
    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"/>
    )
}*/

export default SearchPanel;
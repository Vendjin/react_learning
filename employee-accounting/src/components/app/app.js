import {Component} from "react";

import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, rise: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: false, rise: false, id: 2},
                {name: "Carl W.", salary: 15000, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            /*findIndex - принимает в себя колбек функцию, если она вернет true, то возвращает
            index элемента массива*/
            // const index = data.findIndex(elem => elem.id === id);
            // /*мы не должны применять изменения к стейту, это нарушает структуру/правила реакта,
            // поэтому нужно сделать копию*/
            // console.log(index);
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }


    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }


    onToggleIncrease = (id) => {
        // this.setState(({data}) => ({}) круглые скобки+ковычки возвращают новый объект)
        this.setState(({data}) => ({
            // мапаем все итемы
            data: data.map(item => {
                // если итем отвечаем устлвию - это наш объект, меняем его
                if (item.id === id) {
                    return {...item, increase: !item.increase};
                }
                // иначе возвращаем итем
                return item;
            })
        }))
        /*// простой вариант, но более понятный
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            /!*берет old создает из него новый объект, после создает атрибут increase,
            с противоположным значение из старого old*!/
            const newItem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })*/
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList
                    data={this.state.data}
                    // props_drill часть1 передаем пропс onDelete который содержит функцию
                    // проброс в верх
                    onDeleteDrill={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployersAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

/*function App() {

    const data = [
        {name: "John C.", salary: 800, increase: true, id: 1},
        {name: "Alex M.", salary: 3000, increase: false, id: 2},
        {name: "Carl W.", salary: 15000, increase: true, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList
                data={data}
                // props_drill часть1 передаем пропс onDelete который содержит функцию
                onDelete={id => console.log(id)}/>
            <EmployersAddForm/>
        </div>
    );
}*/

export default App;
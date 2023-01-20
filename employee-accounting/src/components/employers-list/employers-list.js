import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data}) => {

    // используем для массива метод MAP тк он возвращает новый массив,
    // в нашем случае это массив новых элемент
    const elements = data.map(item => {
        // в id попадут только id, а оставшиеся 3 значения будут помещены в itemProps
        const {id, ...itemProps} = item
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            // такой вариант аналогичен строке выше
            <EmployersListItem key={id} {...itemProps}/>
        );
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;
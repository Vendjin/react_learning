import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data, onDeleteDrill, onToggleProp}) => {
    // props_drill часть2 тут распакуем пропсы в разные переменные

    // используем для массива props Data метод MAP тк он возвращает новый массив,
    // в нашем случае это массив новых элемент
    const elements = data.map(item => {
        // в id попадут только id, а оставшиеся 3 значения будут помещены в itemProps
        const {id, ...itemProps} = item;
        // console.log('id =', id, 'items =', itemProps, onToggleProp);
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            // текущий вариант вариант аналогичен строке выше
            <EmployersListItem
                key={id}
                {...itemProps}
                /*props_drill часть3 прокидываем пропс onDelete дальше в EmployersListItem
                вызывая функцию из app.js onDeleteDrill */
                onDelete={() => onDeleteDrill(id)}
                onToggleProp={(event) => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))}
            />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;
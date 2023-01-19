import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem/>
            <EmployersListItem/>
            <EmployersListItem/>
        </ul>
    )
}

export default EmployersList;
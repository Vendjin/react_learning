import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {v4 as uuid} from 'uuid';
import {selectAllFilters} from '../heroesFilters/filtersSlice'
import store from "../../store";
import {useCreateHeroMutation} from '../../api/apiSlice';

const HeroesAddForm = () => {
    const [heroName, setHeroName] = useState('');
    const [heroDescr, setHeroDescr] = useState('');
    const [heroElem, setHeroElem]= useState('');

    const [createHero, {isLoading, isError}] = useCreateHeroMutation()

    const filters = selectAllFilters(store.getState());
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const newHero = {
            id: uuid(),
            name: heroName,
            description: heroDescr,
            element: heroElem,
        };

        createHero(newHero).unwrap();

        // очищаю форму
        setHeroName('');
        setHeroDescr('')
        setHeroElem('');
    }

    if (isLoading) {
        return <option>Загрузка элементов</option>
    } else if (isError) {
        return <option>Ошибка загрузки</option>
    }

    const renderFilters = (filters) => {


        if (filters && filters.length > 0){
            return filters.map(({name, label}) => {
                // если all то ничего не делаем
                if (name === 'all') return;

                return <option key={name} value={name}>{label}</option>;
            })
        }
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={heroName}
                    onChange={event => setHeroName(event.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={heroDescr}
                    onChange={event => setHeroDescr(event.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={heroElem}
                    onChange={event => setHeroElem(event.target.value)}
                >
                    <option >Я владею элементом...</option>
                    {/*<option value="fire">Огонь</option>*/}
                    {renderFilters(filters)}
                </select>
            </div>

            <button type="submit"
                    className="btn btn-primary"

            >
                Создать
            </button>
        </form>
    )
}

export default HeroesAddForm;
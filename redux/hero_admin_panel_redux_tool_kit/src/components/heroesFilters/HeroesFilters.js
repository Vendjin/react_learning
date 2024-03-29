// import {fetchFilters} from "../../actions";
import {activeFilterChanged, fetchFilters, selectAllFilters} from './filtersSlice';
import Spinner from "../spinner/Spinner";
import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {useEffect} from "react";
import store from "../../store";

const HeroesFilters = () => {
    const filters = selectAllFilters(store.getState());
    const {filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        // fetchFilters из стандартных action
        // dispatch(fetchFilters(request));
        dispatch(fetchFilters())
    }, [])


    if (filtersLoadingStatus === 'loading') {
        return <Spinner/>;
    } else if (filtersLoadingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFilters = (filters) => {

        if (filters.length === 0) {
            return <h5 className="text-center mt-5">Фильтры не найдены</h5>
        }

        return filters.map(({name, className, label}) => {
            // Используем библиотеку classnames и формируем классы динамически
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            return <button key={name}
                           id={name}
                           className={btnClass}
                           onClick={() => dispatch(activeFilterChanged(name))}>
                {label}
            </button>
        })
    }

    const elements = renderFilters(filters)

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {/*<button className="btn btn-outline-dark active">Все</button>*/}
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;
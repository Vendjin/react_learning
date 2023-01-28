import './app-filter.css';
const AppFilter = (props) =>{
    const {filter, onFilterSelect} = props;

    const buttonsData = [
        {filterName: 'all', label: 'Все сотрудники'},
        {filterName: 'rise', label: 'На повышение'},
        {filterName: 'moreThen1000', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({filterName, label}) => {
        // тоже самое что и if (filter) === filterName return true
        const isActive = filter === filterName;
        const clazz = isActive ? 'btn-light' : 'btn-outline-light';

        return (
            <button
                onClick={() => onFilterSelect(filterName)}
                className={`btn ${clazz}`}
                type="button"
                key={filterName}>
                {label}
            </button>
        )
    })

    return (
      <div className="btn-group">
          {buttons}
          {/*<button
              className="btn btn-light"
              type="button">
              Все сотрудники
          </button>

          <button
              className="btn btn-outline-light"
              type="button"
              onClick={filterPost}
          >
              На повышение
          </button>

          <button
              className="btn btn-outline-light"
              type="button">
              З/П больше 1000$
          </button>*/}
      </div>
    );
}

export default AppFilter;
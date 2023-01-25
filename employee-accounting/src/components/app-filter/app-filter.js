import './app-filter.css';
const AppFilter = (props) =>{
    const {filter, onFilterSelect} = props;
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        // тоже самое что и if (filter) === name return true
        const isActive = filter === name;
        const clazz = isActive ? 'btn-light' : 'btn-outline-light';

        return (
            <button
                onClick={() => onFilterSelect(name)}
                className={`btn ${clazz}`}
                type="button"
                key={name}>
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
import './app-info.css';

const AppInfo = (props) => {

    const {countEmployees, increaseEmployees} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N {countEmployees}</h1>
            <h2>Общие число сотрудников: </h2>
            <h2>Премию получат: {increaseEmployees}</h2>
        </div>
    );
}

export default AppInfo;
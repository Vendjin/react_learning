import './App.css';
import {useContext, useState} from "react";
import FormMemo from "./Form";
import DataContext from "./context";
import textArea from "./TextArea";


// const {Provider} = DataContext;
// провайдер, то что передается дальше

function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: '',
        label: '',
        forceChangeMail: forceChangeMail,
        changeText: changeText,
        // changeLabel: changeLabel
    });

    function forceChangeMail ()  {
        setData({...data, mail: 'test@gmail.com'})
    }

    function changeText (event) {
        setData({...data, text: event.target.value})
    }


    return (
        <DataContext.Provider value={data}>
            {/*<FormMemo text={data.text}/>*/}
            <FormMemo/>
            <button
                onClick={() => setData({
                    mail: "somename@example.com",
                    // что бы forceChangeMail работал после клика по кнопе добавить его в обработчик onClick
                    forceChangeMail: forceChangeMail,
                })
            }>
                Click me
            </button>
        </DataContext.Provider>
    );
}

export default App;

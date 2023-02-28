import './App.css';
import {useState} from "react";
import FormMemo from "./Form";
import dataContext from "./context";


const {Provider} = dataContext;
// провайдер, то что передается дальше

function App() {
    const [data, setData] = useState({
        mail: 'name@example.com',
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail ()  {
        setData({...data, mail: 'test@gmail.com'})
    }

    return (
        <Provider value={data}>
            <FormMemo text={data.text}/>
            <button
                onClick={() => setData({
                    mail: "somename@example.com",
                    text: 'some text1111',
                    forceChangeMail: forceChangeMail
                })
            }>
                Click me
            </button>
        </Provider>
    );
}

export default App;
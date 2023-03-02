import './App.css';
import {createContext, useContext, useState} from "react";

const MyContext = createContext({
    text: '',
    handleTextChange : () => {}
});

// буду передавать значение value в компонент Internal который вложен в Intermediate, а он в External
const External = () => {
  const [data, setData] = useState(
      {
          text: '',
          handleTextChange: handleTextChange
      }
  );

  function handleTextChange (event) {
      setData({...data, text: event.target.value})
  }

  return (
      <MyContext.Provider value={data}>
          <input type="text" onChange={handleTextChange}/>
        <Intermediate/>
      </MyContext.Provider>
  )
}

const Intermediate = () => {
    return <Internal/>
}

const Internal = () => {
    /*вызываем контекст который где то лежит выше и подключен к компоненту External в котором хранится стейт
    из которого мы и хотим получать данные*/
    const context = useContext(MyContext);

    return (
        <h2>{`Это компонент Internal данные получены из External: ${context.text}`}</h2>
    )
}

function App() {
  return (
    <>
        <External/>
    </>
  );
}

export default App;

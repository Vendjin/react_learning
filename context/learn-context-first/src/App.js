import './App.css';
import {createContext, useContext, useState} from "react";


const defaultState = {
    text: ''
}

const MyContext = createContext(defaultState.text);



const ContextComponent = () => {
    const [text, setText] = useState(defaultState.text);

    return (
        <>
            <MyContext.Provider value={{text, setText}}>
                <Parent/>
            </MyContext.Provider>
        </>
    )
}

const Parent = () => {
    return (
        <>
            <External/>
            <Internal/>
        </>
    )
}

const External = () => {
    const {text, setText} = useContext(MyContext);

    function handleTextChange (event) {
        setText(event.target.value)
    }

    return (
            <input type="text" value={text} onChange={handleTextChange}/>
    )
}

const Internal = () => {
  const {text} = useContext(MyContext);
  return (
      // <h2>{`Это компонент Internal данные получены из External: ${context.text}`}</h2>
      <h2>{`Это компонент Internal данные получены из External: ${text}`}</h2>
  )
}

function App() {
  return (
      <>
          <ContextComponent/>
      </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {createContext, useState} from "react";

const ThemeContext = createContext('light');
const CurrentUserContext = createContext(null);


function App() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider = value={{currentUser, setCurrentUser}}
    </ThemeContext.Provider>
  );
}

export default App;

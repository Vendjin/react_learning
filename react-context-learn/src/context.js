import {createContext} from "react";

const DataContext = createContext({
    mail: 'name@example.com',
    text: '',
    label: '',
    forceChangeMail: () => {},
    changeText: () => {},
    changeLabel: () =>{}
});

console.dir(DataContext);
export default DataContext;
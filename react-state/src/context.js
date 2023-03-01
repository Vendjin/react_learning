import {createContext} from "react";

const dataContext = createContext({
    mail: 'name@example.com',
    text: '',
    label: '',
    forceChangeMail: () => {},
    changeText: () => {},
    changeLabel: () =>{}
});

console.dir(dataContext);
export default dataContext;
import {createContext} from "react";

const dataContext = createContext({
    mail: 'name@example.com',
    text: 'some text'
});
console.dir(dataContext);
export default dataContext;
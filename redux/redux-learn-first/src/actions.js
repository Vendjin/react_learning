/*функции экшен, которые передаются в диспатч, а диспатч, уже видя какой экшен передали,
   выполняет необходимый кейс*/

export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
// export const rnd = (value) => ({type: 'RND', payload: value});
export const rnd = (value) => ({type: 'RND', payload: Math.floor(Math.random() * 10)});
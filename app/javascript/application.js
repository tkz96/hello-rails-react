import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    return <h1>Hello World!</h1>;
}
root.render(<App/>)

//
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root'),
// );
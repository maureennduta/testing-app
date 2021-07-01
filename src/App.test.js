import React from 'react';
import ReactDOM from 'react-dom'; // use this to render
import App from './App';

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<App/>,div);
    ReactDOM.unmountComponentAtNode(div);
})
//passed
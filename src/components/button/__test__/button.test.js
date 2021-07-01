import React from 'react';
import ReactDOM from 'react-dom'; // use this to render
import Button from './../button';
import {render,cleanup} from '@testing-library/react'; //this render dif from reactdom render
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

//cleanup cleans tests for you
afterEach(cleanup);
it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
})
//passed

//second test is that why there are 3 on the terminal?  yes is this a test run

it("renders button correctly",() =>{
    const {getByTestId} = render(<Button label ="Click me please"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click me please")
})
//passed

it("renders btn correctly",() =>{
    const {getByTestId} = render(<Button label ="Save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Save")
})
//passed 

//snapshot testing below, useful for making sure UI doesnt change unexpectedly
it("matches snapshot 1",() => {
    const tree = renderer.create(<Button label ="Save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("matches snapshot 2",() => {
    const tree = renderer.create(<Button label ="click me please"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

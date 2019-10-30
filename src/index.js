import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App/App';
import employeeinfo from './reducer/employeereducer';
let store = createStore(employeeinfo);

render((
    <Provider store={store} >
        <App/>
    </Provider>
), document.getElementById('root'));
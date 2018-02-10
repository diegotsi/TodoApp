import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/app'
import reducers from './main/reducers'

const store = createStore(reducers);
ReactDom.render(
    <Provider store={store}>
    <App/>
    </Provider>

,document.getElementById('app'));
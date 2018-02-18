import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducer';
import Routes from './config/routes';

import './templates/custom.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(logger,thunk, multi, promise)(createStore)(reducers, devTools);

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Routes/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, app)
module.hot.accept();



import React, {Component} from 'react';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

// Routes
import {Router, browserHistory} from 'react-router';
import Routes from './Routes';


const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    {Routes}
                </Router>
            </Provider>
        );
    }
}



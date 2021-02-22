import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import RestoService from './services/resto-service';
import RestoServiceContex from './components/resto-service-context';
import store from './store';

import './index.scss';

const restoSrevice = new RestoService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <RestoServiceContex.Provider value={restoSrevice}>
                <Router>
                    <App/>
                </Router>
            </RestoServiceContex.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));


import React from 'react';
import {Route,IndexRoute,Router,browserHistory} from 'react-router';
import AppComponent from './app/components/app';   
import LoginComponent from './app/components/login.component'; 
import {requireAuth} from './app/api/http-config';
import {logout} from './app/api/http-config';

export default (
    <Router  history={browserHistory}>
                 <Route path='/' onEnter={(nextState, replace, callback) => requireAuth(nextState, replace, callback)}>
                    <IndexRoute component={AppComponent}/>
                </Route>
                <Route path='/login' component={LoginComponent} onEnter={logout}/>
    </Router>
)
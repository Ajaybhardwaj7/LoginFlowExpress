import {Provider} from 'react-redux';
import {Router,browserHistory,Route,IndexRoute} from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import configStore from './app/store/store';
import routes from './routes';

var store = configStore();


function Application(){
    return (
        <Provider store= {store}>
            {routes}
        </Provider>
        )
}

render(<Application/>,document.getElementById('main'));
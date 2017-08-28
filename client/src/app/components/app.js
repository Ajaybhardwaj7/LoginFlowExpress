import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import LoginComponent from './login.component.js';
import HomeComponent from './home.component.js';

//include styles
import '../styles/common.less';
import '../styles/styles.less';

injectTapEventPlugin();

export default class AppComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='app-container'>
                    <MuiThemeProvider muiTheme = {getMuiTheme(lightBaseTheme)}>
                       <HomeComponent/>
                    </MuiThemeProvider>

            </div>
        )
    }
}
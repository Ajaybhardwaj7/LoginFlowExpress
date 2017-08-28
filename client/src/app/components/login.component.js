import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {loginForm} from '../api/http-config';

//app environment
console.log(`app env ${process.env.NODE_ENV}`);

export default class LoginComponent extends React.Component {
    constructor(props){
        super(props);
		this.state={
			username: "Ajay", password:"pass123", errorText:{username:"",password:""},errorMsg:""
		}
		this._binds('onUsernameChange','onPasswordChange','onSubmit','isDisabled');
    }
	_binds(...methods){
		methods.forEach(method=>this[method]=this[method].bind(this));
	}
    render(){
        return (
		<MuiThemeProvider muiTheme = {getMuiTheme(lightBaseTheme)}>
			<div className='login'>
				   <div className='message'>Login to Kepler</div>
				   <p>{this.state.errorMsg}</p>
					<TextField
						floatingLabelText='USERNAME'
						floatingLabelFixed={true}
						onChange={this.onUsernameChange}
						errorText={this.state.errorText.username}
					/>
					<TextField
						type="password"
						floatingLabelText='PASSWORD'
						floatingLabelFixed={true}
						onChange={this.onPasswordChange}
						errorText={this.state.errorText.password}
					/>
					<RaisedButton
					label="LOGIN"
					primary={true}
					disabled={this.isDisabled()}
					onClick={this.onSubmit}
					/>
			</div>
		</MuiThemeProvider>
        )
    }
	onUsernameChange(eve,value){
		value=value.trim();
		var regex = /[.^,/\\]/;
		var fail = regex.test(value);
		if(fail)
		this.setState({username:value,errorText:{username:"The field should not contain .,^/\\",password:this.state.errorText.password},errorMsg:""});
		else
		this.setState({username:value,errorText:{username:"",password:this.state.errorText.password},errorMsg:""});
	}
	onPasswordChange(eve,value){
		value=value.trim();
		var regex = /[.^,/\\]/;
		var fail = regex.test(value);
		if(fail)
		this.setState({password:value,errorText:{password:"The field should not contain .,^/\\",username:this.state.errorText.username},errorMsg:""});
		else
		this.setState({password:value,errorText:{password:"",username:this.state.errorText.username},errorMsg:""});
	}
	isDisabled(){
		return (this.state.username===""||this.state.password==="")||(
		this.state.errorText.username!=""||this.state.errorText.password!="")
	}
	onSubmit(){
		loginForm(this.state.username,this.state.password)
		.then(resp=>{
			if(resp.success === true){
				window.sessionStorage.session=resp.token;
				window.location = "/";
			}else{
				this.setState({errorMsg:"Invalid username or password"})
			}
			
		})
		.catch(err=>{
			if(!err.status){
				alert('Network error');
			}
			throw err;
   		 })
	}
}
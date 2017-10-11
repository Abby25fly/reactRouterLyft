import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

import Home from './Home';
import SignUp_phone from './SignUP_phone';
import SignUP_profile from './SignUP_profile';
import Map from './Map';
import Validation from './SignUpPhoneValidation';

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
			<Switch>
				<Route exact path="/"
				       render={() => <Redirect to= {'/home'}/>}/>
				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/signup_phone" render={() => <SignUp_phone model={model} />}/>
				<Route  path="/signup_validation" render={() => <Validation model={model} />}/>
				<Route  path="/signup_profile" render={() => <SignUP_profile model={model} />}/>
				<Route  path="/map" render={() => <Map model={model} />}/>

				<Route component={Home}/>
			</Switch>
	</BrowserRouter>)
}

export default App;


import React, { Component } from 'react';
import Navbar from './Navbar';
import Calculator from './Calculator';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				<Switch>
					<Route
						exact
						path='/:operation/:num1/:num2'
						render={(routeProps) => <Calculator {...routeProps} />}
					/>
					<Route render={() => <Redirect to='/add/1/2' />} />
				</Switch>
			</div>
		);
	}
}

export default App;

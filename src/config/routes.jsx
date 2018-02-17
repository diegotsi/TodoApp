import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Todo from '../screens/todo/todo';
import About from '../screens/about/about';


export default props => (
    <Router>
        <Switch>
            <Route exact path='/' component={Todo}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/todos' component={Todo}/>
        </Switch>
	</Router>
   
)
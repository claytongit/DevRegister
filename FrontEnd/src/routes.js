import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest } render={ props => (
        isAuthenticated() ? 
        ( <Component { ...rest } /> ) :
        ( <Redirect to={{ pathname: '/', state: { from: props.location } }} /> )
    ) } />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/register" component={ Register } />
            <PrivateRoute path="/home" component={ Home } />
            <Route path="*" component={ () => <h1>Page not found</h1> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
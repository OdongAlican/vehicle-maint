import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './auth/Signin'
import Home from './Home'
import Signup from './auth/Signup'
import PrivateRoute from './PrivateRoute';
import Users from '../containers/Users'
import UpdateUser from './UpdateUser'

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Signin }/>
                    <Route exact path="/signup" component={ Signup }/>
                    <PrivateRoute exact path="/home" component={ Home }/>
                    <PrivateRoute exact path="/users" component={ Users }/>
                    <PrivateRoute exact path="/update-user" component={ UpdateUser }/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;
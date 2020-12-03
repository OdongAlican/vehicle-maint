import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './auth/Signin'
import Home from './Home'
import Signup from './auth/Signup'

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Signin }/>
                    <Route exact path="/home" component={ Home }/>
                    <Route exact path="/signup" component={ Signup }/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;
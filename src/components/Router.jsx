import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './auth/Signin'
import Home from './Home'

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Signin }/>
                    <Route exact path="/home" component={ Home }/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;
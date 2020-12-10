import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './auth/Signin'
import Home from './Home'
import Signup from './auth/Signup'
import PrivateRoute from './PrivateRoute';
import Users from '../containers/Users'
import UpdateUser from './UpdateUser'
import Vehicles from '../containers/Vehicles'
import CreateVehicle from './CreateVehicle'
import VehicleDetail from './VehicleDetail'
import UpdateVehicle from './UpdateVehicle'
import UserVehicles from './UserVehicles'
import Footer from './Footer'
import UserDetails from './UserDetails'
import Contact from './Contact'

const Router = () => {
    return(
        <div className="general-section">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Signin }/>
                    <Route exact path="/signup" component={ Signup }/>
                    <Route exact path="/contact-us" component={ Contact }/>
                    <PrivateRoute exact path="/users/:id" component={ UserDetails }/>
                    <PrivateRoute exact path="/users" component={ Users }/>
                    <PrivateRoute exact path="/update-user" component={ UpdateUser }/>
                    <PrivateRoute exact path="/vehicles" component={ Vehicles }/>
                    <PrivateRoute exact path="/create-vehicles" component={ CreateVehicle }/>
                    <PrivateRoute path="/vehicle/:id" component={ VehicleDetail }/>
                    <PrivateRoute path="/users/:id/cars" component={ UserVehicles }/>
                    <PrivateRoute path="/edit-vehicle/:id" component={ UpdateVehicle }/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Router;
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showVehicleByUser } from '../actions/vehicle'

const UserVehicles = ({ userId }) => {

    const dispatch = useDispatch();

    const usersCars = useSelector(state => state.vehicleReducer.usersVehicles)
    console.log(usersCars, "cars list")

    useEffect(()=> {
        dispatch(showVehicleByUser(userId))
    }, [])
    
    return(
        <div className="user-cars-list">
                {  
                    usersCars.map(car => (
                        <div 
                        className="user-car-details"
                        key={car.id}>
                            <div className="car-title-header-section">
                                <span>{ car.title }</span>
                            </div>
                            <div className="other-car-details">
                                <div className="car-image-section">
                                    <img 
                                    src="https://specials-images.forbesimg.com/imageserve/5d37038495e0230008f64ec1/960x0.jpg?cropX1=569&cropX2=5130&cropY1=347&cropY2=2912" 
                                    alt="car-image" />
                                </div>
                                <div className="left-user-car-details">
                                    <div className="first-title-section">
                                        <div className="first-title-section-inner">
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Vehicle Title</span>
                                        </div>
                                        <div className="second-title-section-inner">
                                            <span>{ car.title }</span>
                                        </div>
                                    </div>
                                    <div className="first-title-section">
                                        <div className="first-title-section-inner">
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Chassis</span>
                                        </div>
                                        <div className="second-title-section-inner">
                                            <span>{ car.chassis}</span>
                                        </div>
                                    </div>
                                    <div className="first-title-section">
                                        <div className="first-title-section-inner">
                                            <i class="fas fa-car mr-2"></i>
                                            <span>Car Model</span>
                                        </div>
                                        <div className="second-title-section-inner">
                                            <span>{ car.model}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default UserVehicles;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneVehicle } from '../actions/vehicle'
import { useParams } from 'react-router-dom'

const VehicleDetail = () => {
    const { id } = useParams()
    
     const vehicle = useSelector(state => state.vehicleReducer.oneVehicle)
     console.log(vehicle, 'info')

    const dispatch = useDispatch()
    useEffect(()=> {
        const senRequest = async () => {
        await dispatch(fetchOneVehicle(id))
        }
        senRequest()
    }, [])

    return(
        <div className="single-car-details">
        <div 
            className="user-car-details over-write-border single-car-details-inner"
            key={vehicle.id}>
                <div className="car-title-header-section single-car-details-span-main">
                    <div className="single-car-details-span">
                        <span>{ vehicle.title }</span>
                    </div>
                    <div className="add-receipt-button">
                        <button>Add Receipt</button>
                    </div>
                    <div className="sale-receipt-button">
                        <button>Sale</button>
                    </div>
                    <div className="add-history-receipt-button">
                        <button type="submit">
                        <i class="fas fa-plus-circle mr-2"></i>
                        Add History
                        </button>
                    </div>
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
                                <span>{ vehicle.title }</span>
                            </div>
                        </div>
                        <div className="first-title-section">
                            <div className="first-title-section-inner">
                                <i class="fas fa-car mr-2"></i>
                                <span>Chassis</span>
                            </div>
                            <div className="second-title-section-inner">
                                <span>{ vehicle.chassis}</span>
                            </div>
                        </div>
                        <div className="first-title-section">
                            <div className="first-title-section-inner">
                                <i class="fas fa-car mr-2"></i>
                                <span>Car Model</span>
                            </div>
                            <div className="second-title-section-inner">
                                <span>{ vehicle.model}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="assign-privilages-mechanics">
                    <div className="assign-privilages-top-section">
                    <div className="car-title-header-section car-privillages-header">
                        <div className="single-car-details-span">
                            <span>Assign Privilages To Mechanics</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="last-privillages-section">
                    <div className="last-privillages-top">
                        <input type="checkbox"/> Rahil (Rahil Repair Store)
                    </div>
                    <div className="last-privillages-top">
                        <input type="checkbox"/> Saqid (Imogambo)
                    </div>
                    <div className="last-privillages-top">
                        <button>Save Settings</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleDetail;
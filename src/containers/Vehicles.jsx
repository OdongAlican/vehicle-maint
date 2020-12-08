import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVehicle } from '../actions/vehicle'
import { Link } from 'react-router-dom'
import { deleteVehicle } from '../actions/vehicle'

const Vehicles = () => {

    const dispatch = useDispatch()
    const vehicles = useSelector(state => state.vehicleReducer.vehicles)

    const removeVehicle = (id) => {
        dispatch(deleteVehicle(id))
    }

    useEffect(()=>{
        dispatch(fetchVehicle())
    }, [])

    return(
        <div>
            {
                vehicles.map(vehicle => (
                    <div key={ vehicle.id } className="vehicle-div card col-md-4 m-2">
                        <p>{vehicle.title}</p>
                        <p>{vehicle.model}</p>
                        <div className="vehicle-button-section mb-2">
                            <Link className="btn btn-secondary mr-2" to={{
                                pathname: `/vehicle/${vehicle.id}`,
                                state: { vehicle }
                            }}>
                                View 
                            </Link>
                            <button 
                            onClick={()=>(removeVehicle(vehicle.id))}
                            className="btn btn-danger">Delete</button>
                            <Link 
                            to={{
                                pathname: `/edit-vehicle/${vehicle.id}`,
                                state: { vehicle }
                            }}
                            className="btn btn-info ml-2">Edit</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Vehicles;
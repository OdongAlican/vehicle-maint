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
        <div>
            <div className="card m-2 col-md-4">
                <p>{ vehicle.id}</p>
                <p>{ vehicle.chassis}</p>
                <p>{ vehicle.title}</p>
                <p>{ vehicle.model}</p>
            </div>
        </div>
    )
}

export default VehicleDetail;
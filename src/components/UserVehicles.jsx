import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showVehicleByUser } from '../actions/users'

const UserVehicles = ({location}) => {
    const userId = location.state.user.id;
    const dispatch = useDispatch();

    const usersCars = useSelector(state => state.usersReducer.usersVehicles)
    
    useEffect(()=> {
        dispatch(showVehicleByUser(userId))
    }, [])
    return(
        <div>
                {  
                    usersCars.map(car => (
                        <div 
                        className="card m-2 bg-secondary col-md-3 p-3"
                        key={car.id}>
                            <p>{ car.title }</p>
                            <p className="text-white">{ car.chassis }</p>
                            <p>{ car.model }</p>
                        </div>
                    ))
                }
        </div>
    )
}

export default UserVehicles;
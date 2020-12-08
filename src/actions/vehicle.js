import { FetchVehicleRequest, 
    CreateVehicleRequest,
    DeleteVehicleRequest,
    UpdateVehicleRequest, 
    FetchOneVehicleRequest} from "../utils/api"

export const FETCH_VEHICLE_SUCCESS = 'FETCH_VEHICLE_SUCCESS'
export const FETCH_VEHICLE_FAILURE = 'FETCH_VEHICLE_FAILURE'
export const DELETE_VEHICLE = 'DELETE_VEHICLE'
export const FETCH_ONE_VEHICLE_SUCCESS = 'FETCH_ONE_VEHICLE_SUCCESS'


export const fetchVehiclesSuccess = vehicles => ({
    type: FETCH_VEHICLE_SUCCESS,
    payload: vehicles,
});

export const fetchVehiclesFailure = error => ({
    type: FETCH_VEHICLE_FAILURE,
    payload: error,
});

export const deleteVehiclesReq = id => ({
    type: DELETE_VEHICLE,
    payload: id,
});

export const FetchOneVehicleReq = vehicle => ({
    type: FETCH_ONE_VEHICLE_SUCCESS,
    payload: vehicle,
})


export const fetchVehicle = () => async dispatch => {
    const method = 'get'
    const path = 'vehicles'
    try {
        const response = await FetchVehicleRequest(method,path)
        dispatch(fetchVehiclesSuccess(response.data.vehicles))
    } catch (error) {
        dispatch(fetchVehiclesFailure(error.message))
    }

}

export const fetchOneVehicle = id => async dispatch => {
    const method = 'get'
    try {
        const response = await FetchOneVehicleRequest(method,id)
        dispatch(FetchOneVehicleReq(response.data.vehicle))
    } catch (error) {
        dispatch(fetchVehiclesFailure(error.message))
    }
}

export const createVehicle = ({ chassis, model, title, manufacturing_date, avatar }, history) => async dispatch => {
    const user_id = localStorage.current_user
    const form = {
        vehicle: { user_id, chassis, model, title, manufacturing_date, avatar }
    }
    const method = "post"
    try {
        await CreateVehicleRequest(method, form)
        history.push('/vehicles')
    } catch (error) {
        dispatch(fetchVehiclesFailure(error.message))
    }
}   

export const deleteVehicle = id => async dispatch => {
    const method = "delete"
    try {
        await DeleteVehicleRequest(method, id)
        dispatch(deleteVehiclesReq(id))
    } catch (error) {
        dispatch(fetchVehiclesFailure(error.message))
    }
}

export const updateVehicle = ({ chassis, model, title, manufacturing_date, avatar }, user, vehicleID, history) => async dispatch => {
    const user_id = user
    const data = {
        vehicle: {chassis, model, title, manufacturing_date, avatar, user_id }
    }
    const method = "put"
    try {
        await UpdateVehicleRequest(method,vehicleID, data)
        history.push(`/vehicle/${vehicleID}`)
    } catch (error) {
        dispatch(fetchVehiclesFailure(error.message))
    }
}

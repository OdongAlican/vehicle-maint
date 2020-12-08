import { FETCH_VEHICLE_SUCCESS, 
    FETCH_VEHICLE_FAILURE,
    DELETE_VEHICLE,
    FETCH_ONE_VEHICLE_SUCCESS } from '../actions/vehicle'

const initialState = {
    vehicles: [],
    error: '',
    oneVehicle: {}
}


const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VEHICLE_SUCCESS:
            return{
                ...state,
                vehicles: action.payload,
                error: '',
                oneVehicle: {}
            }; 
        case FETCH_VEHICLE_FAILURE:
            return{
                ...state,
                vehicles: [],
                error: action.payload,
                oneVehicle: {}
            };
        case FETCH_ONE_VEHICLE_SUCCESS:
            return {
                ...state,
                vehicles: [],
                error: '',
                oneVehicle: action.payload
            };
        case DELETE_VEHICLE:
            return{
                ...state,
                vehicles: state.vehicles.filter(vehicle => vehicle.id !== action.payload),
                error: action.payload
            };                
        default:
            return state;
    }
}

export default vehicleReducer;
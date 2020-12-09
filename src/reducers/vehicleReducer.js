import { FETCH_VEHICLE_SUCCESS, 
    FETCH_VEHICLE_FAILURE,
    DELETE_VEHICLE,
    FETCH_ONE_VEHICLE_SUCCESS,
    FETCH_USERS_VEHICLES_SUCCESS } from '../actions/vehicle'

const initialState = {
    vehicles: [],
    error: '',
    oneVehicle: {},
    usersVehicles: [],
}


const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VEHICLE_SUCCESS:
            return{
                ...state,
                vehicles: action.payload,
                error: '',
                oneVehicle: {},
                usersVehicles: [],
            }; 
        case FETCH_USERS_VEHICLES_SUCCESS:
            return {
                ...state,
                vehicles: [],
                error: '',
                oneVehicle: {},
                usersVehicles: action.payload,
            }
        case FETCH_VEHICLE_FAILURE:
            return{
                ...state,
                vehicles: [],
                error: action.payload,
                oneVehicle: {},
                usersVehicles: [],
            };
        case FETCH_ONE_VEHICLE_SUCCESS:
            return {
                ...state,
                vehicles: [],
                error: '',
                oneVehicle: action.payload,
                usersVehicles: [],
            };
        case DELETE_VEHICLE:
            return{
                ...state,
                vehicles: state.vehicles.filter(vehicle => vehicle.id !== action.payload),
                error: action.payload,
                usersVehicles: [],
            };                
        default:
            return state;
    }
}

export default vehicleReducer;
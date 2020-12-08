import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { updateVehicle } from '../actions/vehicle'

const UpdateVehicle = ({location, history}) => {

    const vehicle = location.state.vehicle 

    console.log(vehicle.id, "inside car")
    const user = vehicle.user_id
    const vehicleID = vehicle.id
    const dispatch = useDispatch()

    const [chassis, setChasis] = useState(vehicle.chassis)
    const [ model, setModel ] = useState(vehicle.model)
    const [ title, setTitle] = useState(vehicle.title)
    const [manufacturing_date, setDate] = useState('')
    const [avatar, setAvatar] = useState('')

    const submitVehicle = event => {
        dispatch(updateVehicle({ chassis, model, title, manufacturing_date, avatar }, user, vehicleID, history));
        event.preventDefault();
      };

    return(
        <div>
        <form onSubmit={submitVehicle}>
            <input
              type="text"
              placeholder="Enter Chasis Number"
              value={chassis}
              onChange={e => setChasis(e.target.value)}
              className="input-control mb-2"
            />
            <input
              type="text"
              placeholder="Enter Model"
              value={model}
              onChange={e => setModel(e.target.value)}
              className="input-control"
            />
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="input-control"
            />
            <input
              type="date"
              placeholder="Enter Title"
              value={manufacturing_date}
              onChange={e => setDate(e.target.value)}
              className="input-control"
            />
            <input
              type="text"
              placeholder="Enter Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
              className="input-control"
            />
            <button type="submit" className="btn-info btn"> Update</button>
          </form>
        </div>
    )
}

export default UpdateVehicle;
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { createVehicle } from '../actions/vehicle'

const CreateVehicle = ({ hideCreateVeh, removeCreate, userId }) => {
    const dispatch = useDispatch()

    const [chassis, setChasis] = useState('')
    const [ model, setModel ] = useState('')
    const [ title, setTitle] = useState('')
    const [manufacturing_date, setDate] = useState('')
    const [avatar, setAvatar] = useState('')

    const submitVehicle = event => {
        dispatch(createVehicle({chassis,model,title,manufacturing_date,avatar}, userId));
        event.preventDefault();
      };

    return(
        <div className={ `create-vehicle-main ${hideCreateVeh}` }>
          <div className="inner-create-vehicle-div">
            <div className="close-div-icon">
              <i 
                onClick = { removeCreate }
              className="fas fa-times-circle"></i>
            </div>
            <h6>Add Vehicle</h6>
            <span>For GoMint</span>
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
                <button 
                onClick={ removeCreate }
                type="submit" className="btn-control mt-1">
                  Add Vehicle
                </button>
              </form>            
            </div>
        </div>
    )
}

export default CreateVehicle;
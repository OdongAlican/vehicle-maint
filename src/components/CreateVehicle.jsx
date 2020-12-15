import React, { useState, useRef, useCallback } from 'react'
import { useDispatch } from "react-redux";
import { createVehicle } from '../actions/vehicle'
import Webcam from "react-webcam";

const CreateVehicle = ({ hideCreateVeh, removeCreate, userId }) => {
    const dispatch = useDispatch()
    const webcamRef = useRef(null)

    const [chassis, setChasis] = useState('')
    const [ model, setModel ] = useState('')
    const [ title, setTitle] = useState('')
    const [manufacturing_date, setDate] = useState('')
    const [avatar, setAvatar] = useState('')
    const [webcamEnabled, setWebcamEnabled] = useState(false)

    const submitVehicle = event => {
        dispatch(createVehicle({chassis, model, title, manufacturing_date, avatar}, userId));
        event.preventDefault();
      };

    const enableWebcam = () => {
      setWebcamEnabled(true)
    }

    const capture = useCallback(
      () => {
      setAvatar('')
      const imageSrc = webcamRef.current.getScreenshot();
      setAvatar(imageSrc)
      setWebcamEnabled(false)
      },
      [webcamRef]
    );

    const uploadImg = (event) => {
      setAvatar('')
      setAvatar(event.target.files[0])
    }

    console.log(avatar)

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
                <div className="upload-capture-image-section">
                  <div className="image-camera-section-one">
                    {
                      avatar.length === 0 ? (
                      <span>Upload Image.....</span>
                      ) : avatar.length > 0 && typeof avatar === 'string' ? (
                      <span>image Uploaded </span>
                      ) : ( 
                      <span>{avatar.name}</span>
                      )
                    }
                  <i class="fas fa-paperclip"></i>
                    <input
                      type="file"
                      className="file-input-hidden"
                      onChange={e => uploadImg(e)}
                    />
                  </div>
                {
                  webcamEnabled ? (
                    <div className="main-webcam-division">
                      <div className="webcam-display-section">
                      <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="webcam-display-section-image"
                        /> 
                        <div>
                          <button onClick={capture}>Capture photo</button>
                        </div>
                        </div>
                    </div>
                      ) : (
                          <i 
                          onClick={enableWebcam}
                          class="fas fa-camera"></i>
                      )
                    }
                </div>
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
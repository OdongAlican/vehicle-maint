import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOneUser } from '../actions/users'
import CreateVehicle from './CreateVehicle' 
import UserVehicles from './UserVehicles'

const UserDetails = () => {
    const [ hideCreateVeh, setHideCreateVeh ] = useState('d-none')

    const { id } = useParams()
    const userInformations = useSelector(state => state.usersReducer.userInfos)

    console.log(id, "user identity")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOneUser(id))
    }, [])

    const creatVehicle = () => {
        setHideCreateVeh('')
    }

    const removeCreate = () => {
        setHideCreateVeh('d-none')
    }

    return(
        <div className="user-details-section">
            <div className="inner-user-details">
                <div className="user-details-upper">
                    <div className="profile-span">
                        <span>Profile</span>
                    </div>
                    <div className="add-more-section">
                        <button
                            onClick = { creatVehicle }
                        >
                        <i className="fas fa-plus-circle mr-2"></i>
                            Add More
                        </button>
                    </div>
                </div>
                <div className="user-details-lower">
                    <div className="image-user-section">
                        <img
                        src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                        alt="user Image"
                        />
                    </div>
                    <div className="user-information-section">
                        <div className="full-name-section">
                            <div className="fullname-label">
                                <i class="fas fa-user mr-2"></i>
                                <span>Full Name :</span>
                            </div>
                            <div className="first-name-section">
                                <span>{userInformations.first_name}</span>
                            </div>
                            <div className="last-name-section">
                                <span>{userInformations.last_name}</span>
                            </div>
                        </div>
                        <div className="user-name-section">
                            <div className="username-label">
                                <i class="fas fa-user mr-2"></i>
                                <span>User Name :</span>
                            </div>
                            <div className="user-name-section-inner">
                                <span>{userInformations.user_name}</span>
                            </div>
                        </div>

                        <div className="user-email-section">
                            <div className="useremail-label">
                            <i class="fas fa-envelope mr-2"></i>
                                <span>Email :</span>
                            </div>
                            <div className="user-email-section-inner">
                                <span>{userInformations.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <span></span>
            </div>
            <UserVehicles userId = { id }/>
            <CreateVehicle hideCreateVeh = { hideCreateVeh } removeCreate = { removeCreate }/>
        </div>
    )
}

export default UserDetails
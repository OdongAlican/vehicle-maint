import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, deleteUser } from '../actions/users'
import User from '../components/User'

const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    const removeUser = (userId) => {
        dispatch(deleteUser(userId))
    }

    return(
        <div>{
                users.map(user => (
                    <User deleteUser = { removeUser } user={user}/>
                ))
            }
        </div>
    )
}

export default Users;
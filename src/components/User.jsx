import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user, deleteUser }) => {
    return(
        <div className="card col-md-3 m-2" key={user.id} >
            <p> { user.first_name } </p>
            <p> { user.last_name } </p>
            <div className="d-flex p-2 w-100 justify-content-center">
                <button 
                className="btn btn-danger w-25 mr-2"
                onClick = { () => (deleteUser(user.id)) } >Delete</button>
                <Link className=" w-25" to={{
                    pathname: '/update-user',
                    state: user,
                }}>
                <button className="btn btn-secondary">Edit</button>
                </Link> 
                <Link 
                to={{
                    pathname:`users/${user.id}/cars`,
                    state: { user }
                }}
                className="btn btn-info ml-2">vehicles</Link>
            </div>
        </div>
    )
}

export default User;
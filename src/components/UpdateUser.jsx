import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { editUser } from '../actions/users'

const UpdateUser = ({ location }) => {
    const userValue = location.state
    const [first_name , setFirstname] = useState(userValue.first_name);
    const [last_name, setLastname] = useState(userValue.last_name);
    const [user_name, setUsername] = useState(userValue.user_name);
    const [phone_number, setPhonenumber] = useState(userValue.phone_number);
    const [password, setPassword] = useState(userValue.password);
    const [email, setEmail] = useState(userValue.email);
    const dispatch = useDispatch();

    const submitData = event => {
        event.preventDefault();
        dispatch(editUser({ first_name, last_name, user_name, phone_number,password, email }));
      };

    return(
        <div>
            <form onSubmit={submitData}>
            <input
              placeholder="Enter First Name"
              value={first_name}
              type="text"
              onChange={e => setFirstname(e.target.value)}
            />
            <input
              placeholder="Enter Last Name"
              type="text"
              value={last_name}
              onChange={e => setLastname(e.target.value)}
            />
            <input
              placeholder="Enter User Name"
              type="text"
              value={user_name}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              placeholder="Enter Phone Number"
              type="number"
              value={phone_number}
              onChange={e => setPhonenumber(e.target.value)}
            />
            <input
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              placeholder="Enter Email Address"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    )
}

export default UpdateUser;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpAction } from '../../actions';

const Signup = props => {
    const { history } = props;
    const [first_name , setFirstname] = useState('');
    const [last_name, setLastname] = useState('');
    const [user_name, setUsername] = useState('');
    const [phone_number, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
  
    const submitData = event => {
      event.preventDefault();
      dispatch(signUpAction({ first_name, last_name, user_name, phone_number,password, email }, history));
    };
  
    const errorMessage = useSelector(state => state.authReducer.error);
  
    return (
      <div className="general-login-section">
        <div className="login-section p-3">
          <h3>Sign Up</h3>
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
            <p className="text-danger">{ errorMessage || '' }</p>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <Link to={{
            pathname: '/',
          }}
          >
            Already have an Account?
          </Link>
        </div>
  
      </div>
    );
  };
  
  export default Signup;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpAction } from '../../actions';
import NavBar from '../Navbar'

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
      <div>
        <NavBar/>
      <div className="general-login-section">
        <div className="login-form-section update-login-form-section">
          <h6>Create a New Account</h6>
          <span>For GoMint</span>
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
            <div className="links-signup-section">
            <Link to={{
                pathname: '/',
              }}
              >
                Already have an Account?
              </Link>
            </div>
            <button type="submit" className="mb-2">Register Now</button>
          </form>

        </div>
      </div>
      </div>
    );
  };
  
  export default Signup;
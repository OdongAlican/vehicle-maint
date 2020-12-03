import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInAction } from '../../actions';

const Signin = props => {
    const { history } = props;
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const saveData = event => {
      event.preventDefault();
      dispatch(signInAction({ email, password }, history));
    };
  
    const errorMessage = useSelector(state => state.authReducer.error);
  
    return (
      <div data-testid="appSignin" className="general-login-section">
        <div className="login-section p-3">
          <h3>Log In</h3>
          <form onSubmit={saveData}>
            <input placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
            <p className="text-danger">{ errorMessage || '' }</p>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <Link to={{
            pathname: '/signup',
          }}
          >
            Don't have an account?
          </Link>
        </div>
  
      </div>
    );
  };

export default Signin
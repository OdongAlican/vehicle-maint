import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInAction } from '../../actions';
import Navbar from '../Navbar'

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
      <div>
        <Navbar/>
      <div className="outer-login-section">
      <div className="general-login-section">
        <div className="extra-login-section">
          <h6>Vehicle Data History and Data Check</h6>
          <div className="maint-provision">
            <span>GoMaint provides vehicle checks and car history checks</span>
          </div>
          <div className="provision-input">
            <input type="text" placeholder="Enter Chassis Number"/>
          </div>
          <button className="provision-button">Search</button>
        </div>
        <div className="login-section">
          <h6>GoMaint Login</h6>
          <div className="radio-buttons-section">
            <div className="first-radio"> 
              <input type="radio" name="" id=""/> Vehicle Holder Login
            </div>
            <div className="second-radio ml-2">
              <input type="radio" name="" id=""/> Mechanic Login
            </div>
          </div>
          <div className="login-form-section">
            <form onSubmit={saveData}>
              <input placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
              <input placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
              <p className="text-danger">{ errorMessage || '' }</p>
              <div className="links-signup-section">
                <div className="first-link-div">
                  <Link to={{pathname: '/signup'}}>Vehicle Owners Register</Link>
                </div>
                <div className="second-link-div">
                  <Link to={{pathname: '/signup'}}>Mechanics Register</Link>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="what-we-do-section">
        <div className="what-we-do-title">
          <h6>What we do here at <div>GoMaint</div></h6>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
        </div>
      </div>
      <div className="lower-home-icons-section">
        <div className="lower-home-icon-one">
          <div className="lower-home-top-icon">
            <i class="fas fa-book"></i>
          </div>
          <h6 className="lower-home-icon-header">History Update</h6>
          <div className="lower-home-span">
            <span>Samples of Our Product</span>
          </div>
        </div>
        <div className="lower-home-icon-one">
          <div className="lower-home-top-icon">
            <i class="fas fa-file-alt"></i>
          </div>
          <h6 className="lower-home-icon-header">View Report</h6>
          <div className="lower-home-span">
            <span>Access  your garage and check</span>
          </div>
        </div>
        <div className="lower-home-icon-one">
          <div className="lower-home-top-icon">
            <i class="fas fa-headset"></i>
          </div>
          <h6 className="lower-home-icon-header">Support</h6>
          <div className="lower-home-span">
            <span>Stuck? and get in touch</span>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  };

export default Signin
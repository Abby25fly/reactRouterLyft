import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './Home.css';

const Home = ( {model} ) => {

	return (

        <div className="container-fluid" id="home">
          <div className="row">
            <div className="text-center logo">
              <img src="images/logo.png" alt="logo" />
            </div>
            <div className="container botones">
              <div className="row">
                <div className="col-md-6 col-xs-6">
                  <a href="#">
                    <button  className="Homebtn" type="button" name="button">
                      Log in
                    </button>
                  </a>
                </div>
                <div className="col-md-6 col-xs-6">
                  <NavLink to="/signup_phone">
                    <button className="Homebtn" type="button" name="button">
                      Sign up
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
 	);
}

export default Home;
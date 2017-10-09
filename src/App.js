import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="text-center logo">
            <img src="images/logo.png" alt="logo" />
          </div>
          <div className="container botones">
            <div className="row">
              <div className="col-md-6 col-xs-6">
                <a href="#">
                  <button type="button" name="button">
                    Log in
                  </button>
                </a>
              </div>
              <div className="col-md-6 col-xs-6">
                <a href="signUp.html">
                  <button type="button" name="button">
                    Sign up
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

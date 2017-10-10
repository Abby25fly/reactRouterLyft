import React, { Component } from "react";
import "./SignUp_Phone.css";

class SingUp extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-xs-1 text-center">
                <a>
                  <i className="fa fa-chevron-left flecha" aria-hidden="true" />
                </a>
              </div>
              <div className="col-md-10 col-xs-10 text-center">
                <h1>Sign Up</h1>
                <br />
                <p>Join now for free ride credit</p>
              </div>
            </div>
          </div>
        </header>
        <div>
          <div>
            <div>
            <form id="registrationForm" className="form-horizontal">
  <div className="form-group">
    <i className="fa fa-user-circle-o col-xs-3" aria-hidden="true" />
    <div className="col-xs-4">
      <label htmlFor="text">Fisrt Name</label>
      <input
        type="text"
        className="form-control"
        name="fist name"
        id="fName"
        placeholder="First name"
      />
    </div>
    <div className="col-xs-4">
      <label htmlFor="text">Last Name</label>
      <input
        type="text"
        className="form-control"
        name="last name"
        id="lName"
        placeholder="Last name"
      />
    </div>
  </div>
  <div className="form-group">
    <i className="fa fa-envelope col-xs-3 " aria-hidden="true" />
    <div className="col-xs-4">
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        className="form-control"
        name="email"
        id="eName"
        placeholder="e-mail"
      />
    </div>
  </div>
  <div className="form-group">
    <i className="fa fa-check-circle col-xs-3" aria-hidden="true" />
    <div className="col-xs-8">
      <button type="submit" className="btn btn-default">
        Sign up
      </button>
    </div>
  </div>
</form>

            </div>
            <div className="form text-center">
              <div className="checkbox">
                <label>
                  <input type="checkbox" className=" col-xs-2 check" required />
                  <span className="col-m-8 col-xs-12">
                    I agree to Lyft´s <a>Terms of service</a>
                  </span>
                </label>
                <div className="help-block with-errors" />
              </div>
            </div>
            <div className="btn-next">
              <a>
                <button type="submit" className="btn btn-lg btn-block next">
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );

  
  }
}


import React, {Component} from 'react';
import './SignUP_phone.css';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'


const SignUP_phone = ({model}) => {
    return (
        <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-xs-1 text-center">
                <a href="javascript:window.history.back();">
                <i
                className="fa fa-chevron-left arrow"
                aria-hidden="true" />
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
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-center">
                <form
                data-toggle="validator"
                role="form"
                action="signUp2.html">
                  <div className="input-group">
                    <div className="input-group-btn ">
                      <div className="form-group">
                         <select className="form-control">
                          <option>
                          Peru +051
                          </option>
                          <option>
                          México +052
                          </option>
                          <option>
                          Chile +056
                          </option>
                        </select>
                      </div>
                    </div>
                    <input
                    id="telNumber"
                    className="form-control"
                    type="tel"
                    data-validation="number"
                    maxLength={9}
                    placeholder={986171293}
                    pattern=".{9,}"
                    title="9 números o menos"
                    required />
                   </div>
                    <br />
                    <h5> We´ll send a text to verify your phone</h5>
                </form>
              </div >
              <div className="col-md-12 col-xs-12 btn-next">
                <NavLink to={"/signup_profile"}
                  className="btn btn-lg btn-block next">
                  Next
                </NavLink>
            </div>
            </div>
          </div>
        </section>
        </div>
    );
}

export default SignUP_phone ;
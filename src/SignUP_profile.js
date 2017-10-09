import React, { Component } from 'react';
import './SignUp_profile.css';

class SignUpProfile extends Component {
    render() {
        return (
         <div>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-xs-1 text-center">
                            <a>
                                <i
                                    className="fa fa-chevron-left flecha"
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
      
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <form
                            data-toggle="validator"
                            action="map.html">
                            <div className="form-group">
                                <span
                                    className="fa fa-user-circle-o icon"
                                    aria-hidden="true" />
                                <input
                                    type="text"
                                    className="form-control inputIcon"
                                    placeholder="First name    Last name"
                                    required />
                            </div>
                            <br />
                            <br />
                            <div className="form-group">
                                <span
                                    className="fa fa-envelope-o icon"
                                    aria-hidden="true" />
                                <input
                                    type="email"
                                    className="form-control inputIcon"
                                    placeholder="Email"
                                    data-error="Bruh, that email address is invalid"
                                    required />
                                <div className="help-block with-errors" />
                            </div>
                            <br />
                            <br />
                        </form>
                    </div>
                    <div className="form text-center">
                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    className=" col-xs-2 check"
                                    required />
                                <span className="col-m-8 col-xs-12">
                                    I agree to Lyft´s <a>
                                        Terms of service
                                </a>
                                </span>
                            </label>
                            <div className="help-block with-errors" />
                        </div>
                    </div>
                    <div className="btn-next">
                        <a>
                            <button
                                type="submit"
                                className="btn btn-lg btn-block next">Next</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default SignUpProfile;
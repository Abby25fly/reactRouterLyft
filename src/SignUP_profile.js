import './SignUP_profile.css';
import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

class SignUP_profile extends Component {

	constructor (props) {
		super (props);
		this.state = {
			goFordward : false
        }
        
        this.userInfo = {
            name:null,
            surname:null,
            email:null,
            phone:null
        }
	}

	render () {
		const {model} = this.props;
		console.log('SignUpForm');

		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});
		}

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
                    </div>
                  </div>
                </div>
              </header>
				<section className="container-fluid form">
                    <div>
                        <center>
                        <form id="registrationForm" className="input-group">
                        <div className="form-group dataRegister">
                            <i className="fa fa-user-circle-o col-xs-2" aria-hidden="true" />
                            <div className="col-md-5 col-xs-5 dataInput">
                                <label htmlFor="text">Fisrt Name</label>
                                <input type="text" className="form-control" name="fist name" id="fName" placeholder="First name" />
                            </div>
                            <div className="col-md-5 col-xs-5 dataInput">
                                <label htmlFor="text">Last Name</label>
                                <input type="text" className="form-control" name="last name" id="lName" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="form-group dataRegister">
                            <i className="fa fa-envelope col-xs-2 " aria-hidden="true" />
                            <div className="col-md-7 col-xs-7 dataInput">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" name="email" id="eName" placeholder="e-mail" />
                            </div>
                        </div>
                        <label className="form-check-label">
						<input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange}/>
						I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
                        </label>

                        {
                            this.state.goFordward ?
                                <NavLink
                                    to={"/map"}>
                                    <button
                                    className="btn btn-lg btn-block btn-lyft next">Next</button>
                                </NavLink>
                                :
                                <button
                                    className="btn btn-lg btn-block btn-lyft next disabled">Next</button>

                        }
                        </form>
                        </center>
                    </div>
					

				</section>
			</div>

		);
	}
}

export default SignUP_profile ;
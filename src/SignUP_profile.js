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
	}

	render () {
		const {model} = this.props;

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
                                    className="fa fa-angle-left fa-3x"
                                    aria-hidden="true"/>
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
                    <form id="registrationForm" className="form-horizontal">
                        <div className="form-group">
                            <i className="fa fa-user-circle-o col-xs-3" aria-hidden="true" />
                            <div className="col-xs-4">
                                <label htmlFor="text">Fisrt Name</label>
                                <input type="text" className="form-control" name="fist name" id="fName" placeholder="First name" />
                            </div>
                            <div className="col-xs-4">
                                <label htmlFor="text">Last Name</label>
                                <input type="text" className="form-control" name="last name" id="lName" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <i className="fa fa-envelope col-xs-3 " aria-hidden="true" />
                            <div className="col-xs-4">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" name="email" id="eName" placeholder="e-mail" />
                            </div>
                        </div>

                    </form>
                </div>
                    <div className="form-group">
                        <i className="fa fa-check-circle col-xs-3" aria-hidden="true" />
                        <div className="col-xs-8">
                            <label className="form-check-label">
                                <input className="form-check-input" id="agreeUser" type="checkbox" onChange={onInputChange}/>
                                I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
                            </label>

                            {
                                this.state.goFordward ?     
                                    <div className="form-group">
                                        <i className="fa fa-check-circle col-xs-3" aria-hidden="true" />
                                        <div className="col-xs-8">
                                            <NavLink to={"/map"}>
                                                <button type="submit" className="btn btn-default disabled">NEXT</button>
                                            </NavLink>   
                                        </div>
                                    </div>
                                    :
                                    <div className="form-group">
                                        <i className="fa fa-check-circle col-xs-3" aria-hidden="true" />
                                        <div className="col-xs-8">
                                            <button type="submit" className="btn btn-default disabled">NEXT</button>
                                        </div>
                                    </div>
                                   
                            }
                       </div>
                    </div>
			</div>

		);
	}
}

export default SignUP_profile ;
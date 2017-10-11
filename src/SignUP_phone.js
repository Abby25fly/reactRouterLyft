
import React, { Component } from 'react';
import './SignUP_phone.css';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'

class SignUP_phone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      complete: false
    }

    this.userInfo = {
      phone: null
    }
  }


  render() {
    const { model } = this.props;
    console.log('SignUpForm');

    const onInputChange = (e) => {
      if (e.target.value != "") {
        this.setState({
          complete: true
        });
      } else {
        this.setState({
          complete: false
        });
      }
    }

    const HeaderSignUp = () => {
      return (
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
      );
    }

    const Countries = () => {
      return (
        <div className="input-group-btn ">
          <div className="form-group">
            <select className="form-control">
              <option>Peru +051</option>
              <option> México +052</option>
              <option>Chile +056</option>
            </select>
          </div>
        </div>
      );
    }
    const FormNumber = () => {
      return (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-center">
                <form
                  data-toggle="validator"
                  role="form"
                  action="signUp2.html">
                  <div className="">
                    <Countries />
                    <input
                      id="telNumber"
                      className="form-control"
                      type="tel"
                      data-validation="number"
                      maxLength={9}
                      placeholder={986171293}
                      pattern=".{9,}"
                      title="9 números o menos"
                      required
                      onChange={onInputChange} />
                  </div>
                  <br />
                  <h5> We´ll send a text to verify your phone</h5>
                  {
                    this.state.complete ?
                      <NavLink to={"/signup_validation"}>
                        <button
                          className="btn btn-lg btn-block next">
                          Next
                  </button>
                      </NavLink>
                      :
                      <button
                        className="btn btn-lg btn-block next disabled">Next</button>
                  }
                </form>
              </div >
            </div>
          </div>
        </section>
      );
    }



    return (
      <div className="container-fluid" >
        <div className="row">
          <HeaderSignUp />
          <FormNumber />
        </div>
      </div>
    );
  }
}

export default SignUP_phone ;

import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'
import './SignUpPhoneValidation.css';

class SignUpPhoneValidation extends Component {
  constructor(props) {
    super(props);
    this.amount = 3;
    this.top = 10;
    this.valueInput = undefined;
    this.pinUser = undefined;
    this.createdPin = [];
    this.t = undefined;
    this.state = {
      pin: [],
      validate: false,
      show: false
    }
  }
  generarPin(array) {
    let valores = Math.floor(Math.random() * this.top);
    if (!array.some(function (e) {
      return e === valores
    })) {
      array.push(valores);
    }
  }
  crearPin() {
    while (this.createdPin.length < this.amount && this.amount < this.top) {
      this.generarPin(this.createdPin);
    }
    this.setState({
      pin: this.createdPin
    })
  }
  ShowAll(e) {
    this.setState({
      show: true
    });
    this.crearPin();
  }
  inputChange(e) {
    let pinEntered = this.state.pin.toString().replace(/,/g, "");
    if (e.target.value === pinEntered) {
      this.setState({
        validate: true
      });
    } else {
      this.setState({
        validate: false
      });
    }
  }
  validatePin(input) {
    this.pinUser = input;
  }
  render() {
    return (
      <div className="text-center">
        <header>
          <div className="col-md-1 col-xs-1 text-center">
            <a href="javascript:window.history.back();">
              <i
                className="fa fa-chevron-left arrow"
                aria-hidden="true" />
            </a>
          </div>
          <h1 className="text-center">Sign Up</h1>
          <h4 className="text-center">Join Now for free ride credit.</h4>
          <hr />
        </header>
        {this.state.show &&
          <div>
            <div>
              <h4 >Tu código Lyft es:</h4>
              <h5><strong>LAB-{this.state.pin}</strong></h5>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.validatePin(this.valueInput);
            }}>
              <strong>LAB-</strong>
              <input type="number"
                value={this.valueInput}
                onChange={(e) => { this.inputChange(e) }} />
              {

                this.state.validate ?
                  <NavLink
                    to="/signup_profile"
                    className="btn btn-lg btnSiguiente "
                  >
                    Next
              </NavLink>
                  :
                  <button
                    className="btn btn-lg btnSiguiente disabled"
                  >
                    Next
          </button>

              }
            </form>
          </div>
        }
        {!this.state.show &&
          <div>
            <button className="btnSiguiente" onClick={(e) => { this.ShowAll(e) }}>Generar Pin</button>
          </div>
        }
      </div>
    );
  }
}

export default SignUpPhoneValidation
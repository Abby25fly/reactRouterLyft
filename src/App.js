import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
setField (e) {
  this.setState({[e.target.number]: e.target.value})
  // guarda los valores de los inputs
 }
  render() {
    return(
      <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-xs-1 text-center">
                <a href="index.html">
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
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 text-center">
                <form data-toggle="validator" role="form" action="signUp2.html">
                  <div className="input-group">
                    <div className="input-group-btn ">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Peru +051</option>
                          <option>México +052</option>
                          <option>Chile +056</option>
                        </select>
                      </div>
                    </div>
                    <input
                    input id="telNumber"
                      className="form-control"
                      type="tel" onChange={(e)=>this.setField(e)} name="number"
                    />
                  </div>
                  <br />
                  <h5> We´ll send a text to verify your phone</h5>
                
                <div className="btn-next">
                <a >
                  <button
                    type="submit"
                    id="btnNext"
                    className="btn btn-lg btn-block next"
                  >
                    Next
                  </button>
                </a>
                
              </div>
                </form>
              </div>
             
              
            </div>
          </div>
        </section>
      </div>
    )
     
  }
}

export default App;
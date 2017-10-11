
import React, {Component} from 'react';
import './SignUP_phone.css';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'



const Modal=(randomCode)=>{
  console.log(randomCode);
  //alert("holi");
  return(
        <div className="modal fade"
             id="modalCode"
              role="dialog">
          <div className="modal-dialog">
                {/* Modal content*/}
              <div className="modal-content">
                  <div className="modal-header">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal">×</button>
                        <h4 className="modal-title">
                        Your code is
                        </h4>
                  </div>
                  <div className="modal-body" id="modalBody">
                  {randomCode}
                  </div>
                  <div className="modal-footer">
                     <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal">Close</button>
                 </div>
                </div>
              </div>
            </div>

  );
}
const Random = ()=>{
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  console.log(text);
  return text;
}

const getCode=()=>{
  let code=Random();
  let randomCode = "LAB-" + code;
  alert("Your code is: " + randomCode);
  Modal(randomCode);
}

const SignUP_phone = ({model}) => {
    return (
        <div>
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-xs-1 text-center">
<<<<<<< HEAD
                <a href="index.html">
                  <i className="fa fa-chevron-left flecha" aria-hidden="true" />
=======
                <a href="javascript:window.history.back();">
                <i
                className="fa fa-chevron-left arrow"
                aria-hidden="true" />
>>>>>>> 20c0ddfeb50977b7daa81b3aa90737410ccbc02d
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
<<<<<<< HEAD
                <form data-toggle="validator" role="form" action="signUp2.html">
                  <div className="input-group">
                    <div className="input-group-btn ">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Peru +051</option>
                          <option>México +052</option>
                          <option>Chile +056</option>
=======
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
>>>>>>> 20c0ddfeb50977b7daa81b3aa90737410ccbc02d
                        </select>
                      </div>
                    </div>
                    <input
<<<<<<< HEAD
                      id="telNumber"
                      className="form-control"
                      type="tel"
                      data-validation="number"
                      maxLength={9}
                      placeholder={986171293}
                      pattern=".{9,}"
                      title="9 números o menos"
                      required
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
    );
  }
}

=======
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
                <NavLink to={"/signup_profile"}>
                  <button
                  className="btn btn-lg btn-block next"
                  onClick={getCode}>
                  Next
                  </button>
                </NavLink>
            </div>
            </div>
          </div>
        </section>
        </div>
    );
}

export default SignUP_phone ;
>>>>>>> 20c0ddfeb50977b7daa81b3aa90737410ccbc02d

import './PriceLyft.css';
import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'

class PriceLyft extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goFordward: false
        }

        this.userInfo = {
            name: null,
            surname: null,
            email: null,
            phone: null
        }
    }

    render() {
        const HeaderPrice = () => {
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
                                <h1>PAYMENT</h1>
                                <br />
                                <p>Join now for free ride credit</p>
                            </div>
                        </div>
                    </div>
                </header>
            );
        }
        return (
            <div>
                <HeaderPrice />
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="Pricebody" id="modalBody">
                            </div>
                            <div class="Pricefooter">
                                <button type="button" class="btn btnPrice">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PriceLyft;
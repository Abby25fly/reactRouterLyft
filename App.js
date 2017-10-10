import React, { Component } from 'react';
import './App.css';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

class App extends Component {
  findMe(){

  }
  render() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <div>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
           <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        </GoogleMap>
      </div>
    ));
    const User = () => {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <button id="findMe" onClick={this.findMe}>
                <i className="fa fa-thumb-tack" aria-hidden="true" />  Where am I?
              </button>
            </div>
            <div className="col-md-3 col-sm-3">
              <input
                type="text"
                id="origin"
                placeholder="origin" />
            </div>
            <div className="col-md-3 col-sm-3">
              <input
                type="text"
                id="destination"
                placeholder="Destination" />
            </div>
            <div className="col-md-3 col-sm-3">
              <button id="setPickup">
                <i className="fa fa-car" aria-hidden="true" />  Set PickUp
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <section id="buscador">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12" id="map">
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfLX9KkhVpllYBAV-geQe_N2R_Xl1t8zc&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div >
          </div >
        </div >
        <User />
      </section >
    )
  }
}

export default App;
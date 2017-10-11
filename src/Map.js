import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps';
import './Map.css';
import ReactGoogleAutocomplete from './ReactGoogleAutocomplete';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'


const Map = ({ model }) => {

  const state = {
    properties: model.properties,
    activeProperty: model.activeProperty,
    filterIsVisible: false,
    filteredProperties: [],
    isFiltering: false,
    isRouting: model.isRouting
  };
  const {
		properties,
    activeProperty,
    filterIsVisible,
    filteredProperties,
    isFiltering,
    isRouting
	} = state;
  const propertiesList = isFiltering ? filteredProperties : properties;

  const setActiveProperty = (property, scroll) => {
    //this.setState({
    //	activeProperty: property,
    //});
    model.setActiveProperty(property);

    const { index } = property;

    // Scroll to active property
    if (scroll) {
      const target = `#card-${index}`;
      //jump(target, {
      //	duration: 800,
      //	easing: easeInOutCubic,
      //});
    }
  }


  const onPathBntClick = () => {
    model.setIsRouting();
  }

  return (<div>

    <HeaderMap />

    <div className="col-md-8 col-sm-8">
      
      <div className="form-group">
        <label htmlFor="destino"> Destino </label>
        <ReactGoogleAutocomplete
          onPlaceSelected={(place) => {

            console.log(place);
            model.setTarget(place);

          }}
          componentRestrictions={{ country: "pe" }}
        />
      </div>
     
    </div>
    <center>
    <div className="col-md-3 col-sm-3">
      <button className="ruta" onClick={onPathBntClick}>
        <i className="fa fa-bicycle" aria-hidden="true"></i>
        Ruta
			</button>
      <NavLink to={"/priceLyft"}>
         <button className="ruta">Set PickUp</button>
      </NavLink>
    </div>
    </center>
    <GoogleMaps
      model={model}
      properties={properties}
      activeProperty={activeProperty}
      setActiveProperty={setActiveProperty}
      filteredProperties={filteredProperties}
      isFiltering={isFiltering}
      isRouting={isRouting}
    />



  </div>);
}

const HeaderMap = () => {
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


export default Map;